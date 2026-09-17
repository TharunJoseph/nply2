import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contacts, site, telHref, whatsappHref } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  location: string;
  quantity: string;
  message: string;
};

const empty: Fields = { name: "", phone: "", location: "", quantity: "", message: "" };

/**
 * Product enquiry interface. The product being asked about is always
 * included in the message, and the visitor picks which NPLYBOARDS number
 * to reach on WhatsApp or by phone.
 */
export function EnquiryDialog({
  productName,
  children,
}: {
  productName?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState<Fields>(empty);

  const interested = productName
    ? `I'm interested in: ${productName}`
    : "I'm interested in your plywood and boards";

  const composed = [
    productName
      ? `Hello NPLYBOARDS, I would like to enquire about ${productName}.`
      : "Hello NPLYBOARDS, I would like to enquire about your plywood and boards.",
    f.name && `Name: ${f.name}`,
    f.phone && `Phone: ${f.phone}`,
    f.location && `Location: ${f.location}`,
    f.quantity && `Quantity required: ${f.quantity}`,
    f.message && `Message: ${f.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[88vh] max-w-lg overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Enquire Now</DialogTitle>
          <DialogDescription>
            Add a few details and send it straight to us on WhatsApp — or simply call.
          </DialogDescription>
        </DialogHeader>

        <p className="rounded-md border border-border bg-secondary px-4 py-3 text-sm">
          {interested}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Row label="Name" id="e-name">
            <Input id="e-name" autoComplete="name" value={f.name} onChange={set("name")} />
          </Row>
          <Row label="Phone number" id="e-phone">
            <Input
              id="e-phone"
              type="tel"
              autoComplete="tel"
              value={f.phone}
              onChange={set("phone")}
            />
          </Row>
          <Row label="Location" id="e-location">
            <Input
              id="e-location"
              placeholder="Town / district"
              value={f.location}
              onChange={set("location")}
            />
          </Row>
          <Row label="Quantity required" id="e-qty">
            <Input
              id="e-qty"
              placeholder="e.g. 20 sheets"
              value={f.quantity}
              onChange={set("quantity")}
            />
          </Row>
        </div>

        <Row label="Message" id="e-message">
          <Textarea id="e-message" rows={3} value={f.message} onChange={set("message")} />
        </Row>

        <div className="mt-2 grid gap-3">
          <p className="eyebrow">WhatsApp Enquiry</p>
          {contacts.map((c) => (
            <Button key={c.digits} variant="hero" size="lg" asChild>
              <a
                href={whatsappHref(c, composed)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle aria-hidden /> WhatsApp {c.display}
              </a>
            </Button>
          ))}
        </div>

        <div className="grid gap-3">
          <p className="eyebrow">Call Us</p>
          {contacts.map((c) => (
            <Button key={c.digits} variant="quiet" size="lg" asChild>
              <a href={telHref(c)}>
                <Phone aria-hidden /> Call {c.display}
              </a>
            </Button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Prefer email? Write to{" "}
          <a href={site.emailHref} className="text-wood underline-offset-4 hover:underline">
            {site.email}
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}

function Row({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-[0.8125rem] font-normal text-foreground/70">
        {label}
      </Label>
      {children}
    </div>
  );
}

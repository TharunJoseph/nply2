import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products, allThicknesses, getProduct } from "@/lib/catalogue";
import { contacts, site, telHref, whatsappHref, type Contact } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  location: z.string().trim().min(2, "Enter your town or district").max(120),
  product: z.string().min(1, "Select a product"),
  quantity: z.string().trim().min(1, "Enter a quantity").max(80),
  thickness: z.string().max(40).optional(),
  message: z.string().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      product: defaultProduct,
      quantity: "",
      thickness: "",
      message: "",
    },
  });

  const sendTo = (contact: Contact) =>
    handleSubmit((values) => {
      const productName =
        values.product === "other"
          ? "a product I need help choosing"
          : (getProduct(values.product)?.name ?? values.product);

      const text = [
        `Hello NPLYBOARDS, I would like to enquire about ${productName}.`,
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Location: ${values.location}`,
        `Quantity required: ${values.quantity}`,
        values.thickness && `Thickness: ${values.thickness}`,
        values.message && `Message: ${values.message}`,
      ]
        .filter(Boolean)
        .join("\n");

      window.open(whatsappHref(contact, text), "_blank", "noopener,noreferrer");
    });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      noValidate
      className="grid gap-5 rounded-md border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} id="q-name">
          <Input id="q-name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Phone number" error={errors.phone?.message} id="q-phone">
          <Input id="q-phone" type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
        <Field label="Location" error={errors.location?.message} id="q-location">
          <Input id="q-location" placeholder="Town / district in Kerala" {...register("location")} />
        </Field>
        <Field label="Quantity required" error={errors.quantity?.message} id="q-qty">
          <Input id="q-qty" placeholder="e.g. 20 sheets" {...register("quantity")} />
        </Field>
        <Field label="Product" error={errors.product?.message} id="q-product">
          <select
            id="q-product"
            {...register("product")}
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
            <option value="other">Something else / not sure</option>
          </select>
        </Field>
        <Field label="Required thickness (optional)" id="q-thickness">
          <select
            id="q-thickness"
            {...register("thickness")}
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <option value="">Any / advise me</option>
            {allThicknesses.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message (optional)" id="q-message">
        <Textarea id="q-message" rows={4} {...register("message")} />
      </Field>

      <div className="grid gap-3">
        <p className="eyebrow">WhatsApp Enquiry</p>
        {contacts.map((c) => (
          <Button key={c.digits} type="button" variant="hero" size="lg" onClick={sendTo(c)}>
            <MessageCircle aria-hidden /> WhatsApp {c.display}
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
        We use your details only to respond to this enquiry. You can also email us at{" "}
        <a href={site.emailHref} className="text-wood underline-offset-4 hover:underline">
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-[0.8125rem] font-normal text-foreground/70">
        {label}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

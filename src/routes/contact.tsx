import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Crumbs } from "@/components/crumbs";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { contacts, generalEnquiryMessage, site, telHref, whatsappHref } from "@/lib/site";

const title = "Contact NPLYBOARDS — Plywood Supplier in Kerala";
const description =
  "Call, WhatsApp or email NPLYBOARDS about plywood, veneers, shuttering plywood, block boards, PVC boards and doors across Kerala.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-8 md:pt-40">
      <div className="container-page">
        <Crumbs items={[{ label: "Contact" }]} />

        <Reveal className="mt-6 max-w-2xl">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            Have a product requirement or need a quotation?
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            Reach us on either number by phone or WhatsApp, or send an email — we will come back
            with availability for your location.
          </p>
        </Reveal>

        {/* Primary contact block */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <a
              href={site.emailHref}
              className="block h-full rounded-md border border-border bg-card p-7 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1 hover:shadow-lift"
            >
              <Mail className="size-5 text-wood" aria-hidden />
              <p className="eyebrow mt-5">Email</p>
              <p className="mt-2 text-base break-all">{site.email}</p>
              <span className="mt-6 inline-block text-sm text-wood">Email Us →</span>
            </a>
          </Reveal>

          {contacts.map((c, i) => (
            <Reveal key={c.digits} delay={(i + 1) * 70}>
              <div className="flex h-full flex-col rounded-md border border-border bg-card p-7">
                <Phone className="size-5 text-wood" aria-hidden />
                <p className="eyebrow mt-5">Call</p>
                <p className="mt-2 text-base">{c.display}</p>
                <div className="mt-6 grid gap-3">
                  <Button variant="hero" size="sm" asChild>
                    <a href={telHref(c)}>
                      <Phone aria-hidden /> Call {c.display}
                    </a>
                  </Button>
                  <Button variant="quiet" size="sm" asChild>
                    <a
                      href={whatsappHref(c, generalEnquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle aria-hidden /> WhatsApp {c.display}
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-md border border-border bg-card p-7">
              <MapPin className="size-5 text-wood" aria-hidden />
              <p className="eyebrow mt-5">Address</p>
              <p className="mt-2 text-sm leading-relaxed">{site.address}</p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="h-full rounded-md border border-border bg-card p-7">
              <Clock className="size-5 text-wood" aria-hidden />
              <p className="eyebrow mt-5">Business hours</p>
              <p className="mt-2 text-sm leading-relaxed">{site.hours}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl">Find us</h2>
            <div className="mt-5 overflow-hidden rounded-md border border-border">
              <iframe
                title="NPLYBOARDS location on Google Maps"
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-4/3 w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-2xl">Send an enquiry</h2>
            <div className="mt-5">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

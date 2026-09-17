import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { MessageCircle, Phone } from "lucide-react";

import { Crumbs } from "@/components/crumbs";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { contacts, generalEnquiryMessage, site, telHref, whatsappHref } from "@/lib/site";

const title = "Request a Plywood Quote in Kerala | NPLYBOARDS";
const description =
  "Tell us the product, thickness and quantity you need and NPLYBOARDS will send a quotation for plywood, MDF, block boards or laminates anywhere in Kerala.";

export const Route = createFileRoute("/quote")({
  validateSearch: z.object({ product: z.string().optional() }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  const { product } = Route.useSearch();

  return (
    <div className="container-page pt-32 pb-8 md:pt-40">
      <Crumbs items={[{ label: "Get a Quote" }]} />

      <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_22rem]">
        <div>
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Quotation</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Request a Quote</h1>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Plywood pricing depends on size, grade, quantity and location, so we quote each
              enquiry individually. Share a few details and we will come back with pricing and
              availability.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <QuoteForm defaultProduct={product ?? ""} />
          </Reveal>
        </div>

        <Reveal delay={140} className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-md bg-charcoal p-6 text-charcoal-foreground">
            <MessageCircle className="size-5" aria-hidden />
            <p className="mt-4 font-display text-xl">WhatsApp Enquiry</p>
            <p className="mt-2 text-sm text-charcoal-foreground/65">
              Fastest way to reach us — send your requirement or a photo of the site.
            </p>
            <div className="mt-5 grid gap-3">
              {contacts.map((c) => (
                <Button key={c.digits} variant="onImage" size="sm" asChild>
                  <a
                    href={whatsappHref(c, generalEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp {c.display}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-border bg-card p-6">
            <Phone className="size-5 text-wood" aria-hidden />
            <p className="mt-4 font-display text-xl">Call us</p>
            <p className="mt-2 text-sm text-muted-foreground">{site.hours}</p>
            <div className="mt-5 grid gap-3">
              {contacts.map((c) => (
                <Button key={c.digits} variant="quiet" size="sm" asChild>
                  <a href={telHref(c)}>Call {c.display}</a>
                </Button>
              ))}
            </div>
            <a
              href={site.emailHref}
              className="mt-5 inline-block text-sm text-wood underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

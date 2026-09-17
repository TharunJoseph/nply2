import { createFileRoute } from "@tanstack/react-router";

import { Crumbs } from "@/components/crumbs";

const title = "Terms & Conditions | NPLYBOARDS";
const description =
  "Terms covering quotations, pricing, product specifications and orders placed with NPLYBOARDS.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="container-page pt-32 pb-8 md:pt-40">
      <Crumbs items={[{ label: "Terms & Conditions" }]} />
      <h1 className="mt-6 font-display text-4xl md:text-5xl">Terms &amp; Conditions</h1>
      <p className="mt-4 text-xs text-muted-foreground">
        Placeholder document — review with your legal advisor before publishing.
      </p>

      <div className="mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg text-foreground">Pricing and quotations</h2>
          <p className="mt-3">
            This website does not display prices. Pricing is confirmed by written
            quotation and depends on size, grade, quantity and delivery location.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-foreground">Products and specifications</h2>
          <p className="mt-3">
            Product images and specifications are representative. Natural wood grain, shade and
            texture vary between batches.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-foreground">Orders and enquiries</h2>
          <p className="mt-3">
            Submitting an enquiry through this website is a request for quotation, not a
            confirmed order. Orders are confirmed once we acknowledge them in writing.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-foreground">Availability</h2>
          <p className="mt-3">
            Availability is confirmed per enquiry. Service coverage across Kerala is general and
            does not imply guaranteed delivery timelines.
          </p>
        </section>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { Crumbs } from "@/components/crumbs";

const title = "Privacy Policy | NPLYBOARDS";
const description =
  "How NPLYBOARDS collects and uses the information you share through enquiry and quotation forms.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="container-page pt-32 pb-8 md:pt-40">
      <Crumbs items={[{ label: "Privacy Policy" }]} />
      <h1 className="mt-6 font-display text-4xl md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-xs text-muted-foreground">
        Placeholder document — review with your legal advisor before publishing.
      </p>

      <div className="mt-10 max-w-2xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg text-foreground">Information we collect</h2>
          <p className="mt-3">
            When you submit an enquiry or quotation request we collect the name, phone number,
            email address, location and project details you provide.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-foreground">How we use it</h2>
          <p className="mt-3">
            We use your information solely to respond to your enquiry, prepare quotations and
            arrange supply. We do not sell your information.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-foreground">Retention</h2>
          <p className="mt-3">
            Enquiry records are retained only as long as needed for business and accounting
            purposes.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-foreground">Contact</h2>
          <p className="mt-3">
            For questions about this policy or to request deletion of your details, contact us
            through the details on our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}

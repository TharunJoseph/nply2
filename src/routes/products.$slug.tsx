import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Droplets, Ruler, ShieldCheck, TreePine } from "lucide-react";

import { Crumbs } from "@/components/crumbs";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { categoryName, getProduct, products } from "@/lib/catalogue";
import { contacts, productEnquiryMessage, telHref, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — N PLY" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — N PLY` },
        { name: "description", content: p.description.slice(0, 158) },
        { property: "og:title", content: `${p.name} — N PLY` },
        { property: "og:description", content: p.description.slice(0, 158) },
        { property: "og:type", content: "product" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <div className="container-page py-40 text-center">
      <h1 className="font-display text-3xl">We couldn't find that product</h1>
      <p className="mt-4 text-sm text-muted-foreground">The product may have been removed from the N PLY collection.</p>
      <Button variant="hero" className="mt-8" asChild><Link to="/products">Browse the N PLY collection</Link></Button>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="pt-32 pb-20 md:pt-40">
      <div className="container-page">
        <Crumbs items={[{ label: "Products", to: "/products" }, { label: product.name }]} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden bg-secondary">
              <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow">{product.grade}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{product.name}</h1>
            <p className="mt-5 text-lg">{product.positioning}</p>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground md:text-base">{product.description}</p>

            <div className="mt-10 grid grid-cols-3 border-y border-border py-6">
              <MiniStat icon={<TreePine />} label="Wood" value={product.wood.split(",")[0]} />
              <MiniStat icon={<Ruler />} label="Calibration" value={product.calibration} />
              <MiniStat icon={<ShieldCheck />} label="Warranty" value={product.warranty} />
            </div>

            <div className="mt-10 grid gap-8">
              <Info title="Wood used" icon={<TreePine />}>{product.wood}</Info>
              <Info title="Moisture performance" icon={<Droplets />}>{product.moisturePerformance}</Info>
              <Info title="Core quality" icon={<ShieldCheck />}>{product.core}</Info>
            </div>

            <div className="mt-12">
              <p className="eyebrow">Key advantages</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-wood" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <p className="eyebrow">Recommended applications</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.applications.map((application) => (
                  <span key={application} className="border border-border px-3 py-2 text-xs text-muted-foreground">{application}</span>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <EnquiryDialog productName={product.name}>
                <Button variant="hero" size="lg">Enquire About {product.grade}</Button>
              </EnquiryDialog>
              {contacts.map((contact) => (
                <Button key={contact.digits} variant="quiet" size="lg" asChild>
                  <a href={whatsappHref(contact, productEnquiryMessage(product.name))} target="_blank" rel="noopener noreferrer">
                    WhatsApp {contact.display}
                  </a>
                </Button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-5">
              {contacts.map((contact) => (
                <a key={contact.digits} href={telHref(contact)} className="text-xs text-wood hover:underline">
                  Call {contact.display}
                </a>
              ))}
            </div>

            <p className="mt-8 text-xs text-muted-foreground">Warranty is subject to N PLY’s applicable warranty terms and conditions.</p>
          </Reveal>
        </div>
      </div>

      <section className="container-page mt-28 border-t border-border pt-20">
        <Reveal>
          <p className="eyebrow">Explore the collection</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Four N PLY performance levels.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group border border-border p-5 transition-transform hover:-translate-y-1">
              <p className="eyebrow">{p.grade}</p>
              <h3 className="mt-3 font-display text-xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.positioning}</p>
              <ArrowLink />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function MiniStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="min-w-0 pr-3">
      <div className="flex items-center gap-1.5 text-wood">{icon}<span className="text-[9px] uppercase tracking-widest text-muted-foreground">{label}</span></div>
      <p className="mt-2 text-xs font-medium leading-snug">{value}</p>
    </div>
  );
}
function Info({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <div><div className="flex items-center gap-2 text-sm font-medium"><span className="text-wood">{icon}</span>{title}</div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p></div>;
}
function ArrowLink() {
  return <span className="mt-6 inline-block text-xs text-muted-foreground">View product →</span>;
}

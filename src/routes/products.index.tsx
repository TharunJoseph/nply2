import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Droplets, Ruler, ShieldCheck, TreePine } from "lucide-react";

import { Crumbs } from "@/components/crumbs";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { products } from "@/lib/catalogue";

import heroPlywood from "@/assets/hero-plywood.jpg";
import mrImage from "@/assets/app-home.jpg";
import bwrImage from "@/assets/app-office.jpg";
import bwpImage from "@/assets/app-kitchen.jpg";
import premiumImage from "@/assets/story-timber.jpg";

const title = "N PLY Collection — Engineered Plywood for Every Project";
const description =
  "Explore the N PLY plywood collection: IS 303 MR, IS 303 BWR, IS 303 BWP and IS 710 Premium.";

export const Route = createFileRoute("/products/")({
  validateSearch: () => ({}),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProductsPage,
});

const productVisuals = {
  "n-ply-is-303-mr": mrImage,
  "n-ply-is-303-bwr": bwrImage,
  "n-ply-is-303-bwp": bwpImage,
  "n-ply-is-710-premium": premiumImage,
} as const;

function ProductsPage() {
  return (
    <div className="pb-0">
      <section className="relative min-h-[78vh] overflow-hidden bg-charcoal">
        <img
          src={heroPlywood}
          alt="N PLY plywood and premium interior materials"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
        <div className="container-page relative flex min-h-[78vh] items-end py-28 md:py-36">
          <Reveal className="max-w-3xl text-charcoal-foreground">
            <Crumbs items={[{ label: "Products" }]} />
            <p className="eyebrow mt-12 text-charcoal-foreground/70">N PLY Collection</p>
            <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[0.98] md:text-7xl">
              Engineered for Strength. Built for Generations.
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-charcoal-foreground/75 md:text-base">
              Four focused plywood ranges, developed for different levels of performance,
              moisture resistance, durability and application requirements.
            </p>
            <Button variant="onImage" size="lg" className="mt-10" asChild>
              <a href="#collection">
                Explore the Collection <ArrowDown className="size-4" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="collection" className="container-page scroll-mt-24 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">One collection. Four performance levels.</p>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            The right board starts with the right specification.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            From dry interior furniture to demanding, moisture-prone environments, N PLY keeps
            the choice focused and clear.
          </p>
        </Reveal>

        <nav className="sticky top-[72px] z-30 mt-12 -mx-4 overflow-x-auto border-y border-border bg-background/95 px-4 py-3 backdrop-blur md:mx-0 md:px-0" aria-label="N PLY products">
          <div className="flex min-w-max gap-6 text-xs uppercase tracking-[0.12em]">
            {products.map((product) => (
              <a key={product.slug} href={`#${product.slug}`} className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground">
                {product.grade}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 70}>
              <a href={`#${product.slug}`} className="group block h-full border border-border bg-card transition-transform duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={productVisuals[product.slug as keyof typeof productVisuals]}
                    alt={`${product.name} application`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{product.grade}</p>
                  <h3 className="mt-3 font-display text-2xl">{product.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.positioning}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs">
                    <span>{product.warranty} Warranty</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <div>
        {products.map((product, index) => (
          <ProductSection key={product.slug} product={product} index={index} />
        ))}
      </div>

      <section className="container-page py-24 md:py-32">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Built with precision</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Made to last.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            From everyday interiors to premium high-performance applications, N PLY offers plywood
            engineered around strength, stability, precision and long-term performance.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button variant="hero" asChild><Link to="/quote">Talk to Our Team</Link></Button>
          <Button variant="quiet" asChild><Link to="/about">Our Quality Difference</Link></Button>
        </div>
      </section>
    </div>
  );
}

function ProductSection({ product, index }: { product: (typeof products)[number]; index: number }) {
  const reverse = index % 2 === 1;
  const image = productVisuals[product.slug as keyof typeof productVisuals];

  return (
    <section id={product.slug} className="scroll-mt-24 border-t border-border">
      <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="min-h-[420px] lg:min-h-[700px]">
          <img src={image} alt={`${product.name} — ${product.positioning}`} className="h-full w-full object-cover" loading={index === 0 ? "eager" : "lazy"} />
        </div>
        <div className="flex items-center bg-background">
          <div className="w-full px-6 py-20 md:px-12 md:py-24 lg:px-20">
            <Reveal>
              <p className="eyebrow">{product.grade}</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{product.name}</h2>
              <p className="mt-4 text-lg">{product.positioning}</p>
              <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{product.description}</p>

              <div className="mt-10 grid grid-cols-3 gap-3 border-y border-border py-5">
                <Stat icon={<TreePine />} label="Wood" value={index === 3 ? "Selected Hardwood" : index === 0 ? "Plantation Wood" : "Selected Wood"} />
                <Stat icon={<Ruler />} label="Build" value={product.calibration} />
                <Stat icon={<ShieldCheck />} label="Warranty" value={product.warranty} />
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <InfoBlock title="Wood used" icon={<TreePine />}>{product.wood}</InfoBlock>
                <InfoBlock title="Moisture performance" icon={<Droplets />}>{product.moisturePerformance}</InfoBlock>
              </div>

              <div className="mt-10">
                <p className="eyebrow">Core quality</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.core}</p>
              </div>

              <div className="mt-10">
                <p className="eyebrow">Key advantages</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-wood" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <p className="eyebrow">Recommended applications</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <span key={application} className="border border-border px-3 py-2 text-xs text-muted-foreground">{application}</span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <EnquiryDialog productName={product.name}>
                  <Button variant="hero">Enquire About {product.grade}</Button>
                </EnquiryDialog>
                <span className="text-xs text-muted-foreground">Warranty subject to N PLY’s applicable terms and conditions.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2 text-wood">{icon}<span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{label}</span></div>
      <p className="mt-2 text-sm font-medium leading-snug">{value}</p>
    </div>
  );
}

function InfoBlock({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-wood">{icon}</span>
        <p className="text-sm font-medium">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

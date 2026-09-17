import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero-plywood.jpg";
import storyImg from "@/assets/story-timber.jpg";
import appHome from "@/assets/app-home.jpg";
import appWorkshop from "@/assets/app-workshop.jpg";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/catalogue";
import { contacts, generalEnquiryMessage, site, telHref, whatsappHref } from "@/lib/site";

const title = "NPLYBOARDS — Premium Plywood Supplier in Kerala";
const description =
  "Premium plywood and wood solutions for homes, interiors, furniture and construction across Kerala. Marine, waterproof and BWP plywood, MDF, block boards and laminates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "plywood in Kerala, plywood suppliers Kerala, marine plywood Kerala, waterproof plywood Kerala, plywood sheets Kerala, premium plywood Kerala",
      },
    ],
  }),
  component: Home,
});

const spaces = [
  { label: "Homes & interiors", image: appHome },
  { label: "Furniture workshops", image: appWorkshop },
];

const trust = [
  {
    n: "01",
    t: "Quality you can trust",
    b: "Carefully selected boards with consistent grading you can plan a project around.",
  },
  {
    n: "02",
    t: "Made for Kerala",
    b: "Moisture resistance and durability matched to a humid, coastal climate.",
  },
  {
    n: "03",
    t: "People you can reach",
    b: "Guidance on the right grade and thickness before you buy — and after.",
  },
];

function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* BRAND */}
      <section className="relative flex min-h-[96svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Stacked premium plywood sheets in a sunlit warehouse"
            width={1920}
            height={1200}
            className="h-full w-full origin-center object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-charcoal/35" />
        </div>

        <div className="container-page relative pt-40 pb-28">
          <Reveal className="max-w-3xl">
            <Logo onImage size="xl" asLink={false} />
            <h1 className="mt-14 font-display text-4xl leading-[1.05] text-charcoal-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Built with quality.
              <br />
              Designed to last.
            </h1>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-charcoal-foreground/75 md:text-lg">
              Plywood and wood-based boards for homes, interiors and construction across Kerala.
            </p>
            <div className="mt-12">
              <Button variant="onImage" size="lg" asChild>
                <Link to="/products">Explore the collection</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="container-page py-28 md:py-44">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Est. 2006 — Kerala, India</p>
          <h2 className="mt-8 font-display text-3xl leading-[1.12] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Twenty years in the woods —
            <br className="hidden sm:block" /> and we still care about every sheet.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-24">
          <Reveal>
            <img
              src={storyImg}
              alt="A craftsman checking the edge of a plywood sheet in a timber workshop"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-4/5 w-full rounded-md object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="space-y-7 text-[0.9375rem] leading-[1.85] text-muted-foreground md:text-base">
            <p className="text-foreground/90">
              We did not arrive at plywood through a spreadsheet. We arrived through years spent
              around timber, veneer, pressing and the people who know wood by hand.
            </p>
            <p>
              For two decades, our work has been shaped by a simple belief: quality is found in the
              details — the core, the bonding, the consistency and the care that goes into every
              sheet.
            </p>
            <p>
              Over the years, we have learned to look beyond what appears on the surface,
              understanding what makes a board dependable long after it leaves our hands.
            </p>
            <p>
              Twenty years later, our approach remains simple: create and supply plywood we can
              stand behind, backed by experience, craftsmanship and people you can reach.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 pt-3 text-sm text-foreground underline-offset-4 transition-colors hover:text-wood hover:underline"
            >
              More about NPLYBOARDS <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS — curated preview */}
      <section className="border-y border-border bg-ivory">
        <div className="container-page py-28 md:py-40">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Selected materials</p>
            <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl">
              A few boards we are asked for most.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 font-display text-xl transition-colors hover:text-wood md:text-2xl"
            >
              Explore the full collection
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="container-page py-28 md:py-40">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Applications</p>
          <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl">
            Made for every space.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 md:gap-10">
          {spaces.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <figure className="group relative overflow-hidden rounded-md">
                <img
                  src={s.image}
                  alt={s.label}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-8 font-display text-xl text-charcoal-foreground md:text-2xl">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container-page py-28 md:py-40">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-charcoal-foreground/50">Why NPLYBOARDS</p>
            <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
              The right board decides whether a finish lasts.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
            {trust.map((item, i) => (
              <Reveal key={item.n} delay={i * 90} className="border-t border-charcoal-foreground/15 pt-7">
                <span className="font-display text-sm text-charcoal-foreground/40">{item.n}</span>
                <h3 className="mt-4 text-xl text-charcoal-foreground">{item.t}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/60">
                  {item.b}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-page py-28 text-center md:py-44">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl">
            Tell us what you are building.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Share the product, thickness and quantity — we will come back with pricing and
            availability for your location.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button variant="quiet" size="lg" asChild>
              <a href={site.emailHref}>Email Us</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:mx-auto sm:max-w-md">
            {contacts.map((c) => (
              <div key={c.digits} className="flex flex-wrap justify-center gap-3">
                <Button variant="quiet" size="sm" asChild>
                  <a href={telHref(c)}>Call {c.display}</a>
                </Button>
                <Button variant="quiet" size="sm" asChild>
                  <a
                    href={whatsappHref(c, generalEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp {c.display}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

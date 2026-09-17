import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Layers3, Ruler, ScanSearch, TreePine } from "lucide-react";

import aboutInterior from "@/assets/cat-commercial.jpg";
import peopleWork from "@/assets/cat-other.jpg";
import appWorkshop from "@/assets/app-workshop.jpg";

import { Crumbs } from "@/components/crumbs";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { keralaAreas } from "@/lib/site";

const title = "About N PLY — Built Around Better Plywood";
const description =
  "Learn about N PLY's approach to wood selection, bonding, precision manufacturing, calibration and quality control.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const qualitySteps = [
  {
    number: "01",
    title: "Carefully Selected Wood",
    text: "We select suitable timber based on density, strength, veneer quality and application requirements.",
    icon: TreePine,
  },
  {
    number: "02",
    title: "Precision Veneer Preparation",
    text: "Veneers are processed with attention to thickness, quality, grain and consistency.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Advanced Bonding",
    text: "Appropriate adhesive systems are used according to the required plywood grade and performance category.",
    icon: ScanSearch,
  },
  {
    number: "04",
    title: "Precision Pressing",
    text: "Controlled pressing helps create a strong and stable plywood structure.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "100% Calibration",
    text: "Our BWR and IS 710 calibrated ranges undergo calibration to achieve consistent panel thickness and improved dimensional accuracy.",
    icon: Ruler,
  },
  {
    number: "06",
    title: "Core Quality Control",
    text: "We maintain stringent internal quality-control standards to minimize and, where specified, achieve zero core gaps in our premium grades.",
    icon: Check,
  },
  {
    number: "07",
    title: "Final Inspection",
    text: "Panels are checked for dimensions, thickness, surface quality, bonding and overall construction before dispatch.",
    icon: ScanSearch,
  },
];

function AboutPage() {
  return (
    <div className="pt-32 pb-8 md:pt-40">
      <div className="container-page">
        <Crumbs items={[{ label: "About Us" }]} />

        <Reveal className="mt-6 max-w-3xl">
          <p className="eyebrow">About N PLY</p>
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Right wood. Right bonding. Right construction.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            At N PLY, we believe premium plywood begins with the right wood, the right resin,
            precise manufacturing and uncompromising quality control. Our approach is built around
            matching material performance to the way a board will actually be used.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <img
            src={aboutInterior}
            alt="Modern interior finished with warm plywood panelling"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-16/9 w-full object-cover"
          />
        </Reveal>

        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Materials that become part of your space.</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                N PLY develops a focused plywood range for different levels of performance,
                moisture resistance, durability and application requirements.
              </p>
              <p>
                From everyday interior furniture to demanding moisture-prone environments, our
                products are built around careful wood selection, strong bonding, precision
                pressing, calibrated thickness and stringent quality control.
              </p>
              <p>
                The result is a collection designed to make plywood selection clearer for
                homeowners, designers, furniture makers, contractors and builders.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">Why we exist</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Good materials, plainly explained.</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                The right plywood depends on where it will be used, the moisture it will see and
                the performance the project demands.
              </p>
              <p>
                N PLY keeps that decision focused with four clearly differentiated products,
                transparent construction details and a quality philosophy that starts before the
                first panel is pressed.
              </p>
            </div>
            <Button variant="hero" className="mt-8" asChild>
              <Link to="/products">Explore the collection</Link>
            </Button>
          </Reveal>
        </div>
      </div>

      <section className="mt-24 border-y border-border bg-ivory">
        <div className="container-page py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">The N PLY Quality Difference</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                Quality is a process, not a label.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                Every N PLY panel begins with careful wood selection and continues through a
                controlled manufacturing process.
              </p>
              <img
                src={appWorkshop}
                alt="Selected timber and veneer detail"
                loading="lazy"
                className="mt-10 aspect-[4/5] w-full object-cover"
              />
            </Reveal>

            <div className="relative">
              <div className="absolute left-[13px] top-4 bottom-4 hidden w-px bg-border md:block" />
              <div className="space-y-0">
                {qualitySteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <Reveal key={step.number} delay={index * 50} className="relative md:pl-12">
                      <div className="border-b border-border py-8 first:pt-4 md:first:pt-4">
                        <div className="absolute left-0 top-8 hidden size-7 items-center justify-center border border-border bg-ivory md:flex">
                          <Icon className="size-3.5 text-wood" />
                        </div>
                        <div className="flex items-start gap-5">
                          <span className="font-mono text-xs text-wood">{step.number}</span>
                          <div>
                            <h3 className="font-display text-2xl">{step.title}</h3>
                            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ivory">
        <div className="container-page py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">Choose the right N PLY</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                Choose the right N PLY for your project.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                The right plywood depends on where it will be used, the moisture it will see and
                the performance the project demands. Use this comparison to understand the four
                N PLY ranges at a glance.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 overflow-x-auto border-t border-border">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-foreground/20">
                  {["N PLY Grade", "Wood Selection", "Calibration", "Core Gap Standard", "Warranty", "Recommended Use"].map((h) => (
                    <th key={h} className="px-4 py-4 font-medium first:pl-0">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-5 pl-0 font-medium">IS 303 MR</td>
                  <td className="px-4 py-5">Plantation Wood</td>
                  <td className="px-4 py-5">Standard</td>
                  <td className="px-4 py-5">Approximately Zero*</td>
                  <td className="px-4 py-5">10 Years</td>
                  <td className="px-4 py-5">Dry interiors</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-5 pl-0 font-medium">IS 303 BWR</td>
                  <td className="px-4 py-5">Dense Plantation / Mixed Semi-Hardwood</td>
                  <td className="px-4 py-5">100% Calibrated</td>
                  <td className="px-4 py-5">Approximately Zero*</td>
                  <td className="px-4 py-5">20 Years</td>
                  <td className="px-4 py-5">Humid / semi-moist interiors</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-5 pl-0 font-medium">IS 303 BWP</td>
                  <td className="px-4 py-5">Selected High-Density Hardwood / Semi-Hardwood</td>
                  <td className="px-4 py-5">100% Calibrated</td>
                  <td className="px-4 py-5">Zero*</td>
                  <td className="px-4 py-5">30 Years</td>
                  <td className="px-4 py-5">Kitchens / high-moisture interiors</td>
                </tr>
                <tr>
                  <td className="px-4 py-5 pl-0 font-medium">IS 710 Premium</td>
                  <td className="px-4 py-5">100% Selected Hardwood</td>
                  <td className="px-4 py-5">100% Calibrated</td>
                  <td className="px-4 py-5">Zero*</td>
                  <td className="px-4 py-5">50 Years</td>
                  <td className="px-4 py-5">Premium / demanding applications</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            *Core-gap statements refer to N PLY’s internal manufacturing and quality-control standards
            and should be supported by the applicable product specifications and testing documentation.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button variant="hero" asChild><Link to="/products">Explore the four products</Link></Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center md:py-28">
          <Reveal>
            <p className="eyebrow">Who we work with</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Homeowners, designers, makers and builders.</h2>
            <ul className="mt-8 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
              {[
                "Homeowners and self-builders",
                "Interior designers and architects",
                "Furniture makers and carpenters",
                "Contractors and builders",
                "Modular kitchen studios",
                "Commercial fit-out teams",
              ].map((w) => (
                <li key={w} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wood" />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Serving {keralaAreas.slice(0, 5).join(", ")} and locations across Kerala.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src={peopleWork}
              alt="Furniture workshop with plywood panels and hand tools"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

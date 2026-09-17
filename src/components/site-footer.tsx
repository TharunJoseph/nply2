import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { contacts, generalEnquiryMessage, site, telHref, whatsappHref } from "@/lib/site";
import { categories } from "@/lib/catalogue";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-charcoal text-charcoal-foreground">
      <div className="container-page grid gap-14 py-20 md:grid-cols-4 md:py-24">
        <div className="md:col-span-2 md:max-w-sm">
          <Logo onImage size="lg" />
          <p className="mt-7 text-sm leading-relaxed text-charcoal-foreground/65">
            {site.tagline} Serving homeowners, interior designers, furniture makers and
            contractors across Kerala.
          </p>
          <div className="mt-7 space-y-2.5 text-sm text-charcoal-foreground/70">
            {contacts.map((c) => (
              <div key={c.digits} className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href={telHref(c)}
                  className="flex items-center gap-2 transition-colors hover:text-charcoal-foreground"
                >
                  <Phone className="size-3.5" aria-hidden /> {c.display}
                </a>
                <a
                  href={whatsappHref(c, generalEnquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-charcoal-foreground/55 transition-colors hover:text-charcoal-foreground"
                >
                  <MessageCircle className="size-3.5" aria-hidden /> WhatsApp
                </a>
              </div>
            ))}
            <a
              href={site.emailHref}
              className="flex items-center gap-2 transition-colors hover:text-charcoal-foreground"
            >
              <Mail className="size-3.5" aria-hidden /> {site.email}
            </a>
            <p className="flex items-start gap-2 text-charcoal-foreground/65">
              <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden /> {site.address}
            </p>
          </div>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <p className="eyebrow text-charcoal-foreground/50">Explore</p>
          <ul className="mt-5 space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/quote", label: "Get a Quote" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-charcoal-foreground/70 transition-colors duration-200 hover:text-charcoal-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Categories" className="text-sm">
          <p className="eyebrow text-charcoal-foreground/50">Range</p>
          <ul className="mt-5 space-y-3">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products"
                  search={{ category: c.slug }}
                  className="text-charcoal-foreground/70 transition-colors duration-200 hover:text-charcoal-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-charcoal-foreground/12">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-charcoal-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NPLYBOARDS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-charcoal-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-charcoal-foreground">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

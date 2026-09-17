import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    navigate({ to: "/products", search: { q: term.trim() || undefined } });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        overHero
          ? "bg-transparent py-6"
          : "border-b border-border/70 bg-background/92 py-4 backdrop-blur-md",
      )}
    >
      <div className="container-page flex items-center justify-between gap-8">
        <Logo onImage={overHero} size={overHero ? "md" : "sm"} className="shrink-0" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "text-[0.8125rem] tracking-wide transition-colors duration-200",
                overHero
                  ? "text-charcoal-foreground/80 hover:text-charcoal-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
              activeProps={{
                className: overHero ? "text-charcoal-foreground" : "text-foreground",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search products"
            onClick={() => setSearchOpen(true)}
            className={overHero ? "text-charcoal-foreground hover:bg-charcoal-foreground/15" : ""}
          >
            <Search />
          </Button>

          <Button
            variant={overHero ? "onImage" : "hero"}
            size="sm"
            asChild
            className="ml-1 hidden sm:inline-flex"
          >
            <Link to="/quote">Get a Quote</Link>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "lg:hidden",
                  overHero ? "text-charcoal-foreground hover:bg-charcoal-foreground/15" : "",
                )}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col px-6 pt-10 pb-8">
                <nav className="flex flex-col gap-1" aria-label="Mobile">
                  {nav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="border-b border-border/60 py-4 font-display text-2xl text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/quote" onClick={() => setMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="top-24 max-w-xl translate-y-0 bg-card">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Search products</DialogTitle>
            <DialogDescription>
              Search by product name, category, grade or brand.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitSearch} className="flex gap-2">
            <Input
              autoFocus
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="e.g. 710 BWP plywood 18 mm"
              aria-label="Search products"
            />
            <Button type="submit" variant="hero">
              Search
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
}

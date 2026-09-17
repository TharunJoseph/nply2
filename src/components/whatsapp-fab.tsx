import { MessageCircle } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { contacts, generalEnquiryMessage, whatsappHref } from "@/lib/site";

/** Floating WhatsApp action — the visitor chooses which number to contact. */
export function WhatsAppFab() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="WhatsApp NPLYBOARDS"
          className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-3 text-sm font-medium text-charcoal-foreground shadow-lift transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-0.5 hover:bg-wood sm:right-6 sm:bottom-6"
        >
          <MessageCircle className="size-4" aria-hidden />
          <span className="hidden sm:inline">WhatsApp Enquiry</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" side="top" className="w-64 bg-card p-3">
        <p className="eyebrow px-1">WhatsApp NPLYBOARDS</p>
        <div className="mt-3 grid gap-1">
          {contacts.map((c) => (
            <a
              key={c.digits}
              href={whatsappHref(c, generalEnquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-secondary"
            >
              {c.display}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

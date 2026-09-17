import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { EnquiryDialog } from "@/components/enquiry-dialog";
import { categoryName, type Product } from "@/lib/catalogue";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden rounded-md bg-secondary"
        tabIndex={-1}
        aria-hidden
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={768}
          className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col pt-7">
        <p className="eyebrow">{categoryName(product.categorySlug)}</p>

        <h3 className="mt-3 font-display text-2xl leading-snug">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="transition-colors duration-200 hover:text-wood"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">{product.grade}</p>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-5 pt-7">
          <EnquiryDialog productName={product.name}>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm text-foreground underline-offset-4 transition-colors hover:text-wood"
            >
              Enquire Now
              <ArrowRight
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </button>
          </EnquiryDialog>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

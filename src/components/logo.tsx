import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/nply-logo.png";
import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
  xl: "h-20 md:h-24",
} as const;

/**
 * Official N-PLY / NPLYBOARDS mark. Never recolored or distorted — on dark
 * surfaces it sits on a light plate so it stays crisp and legible.
 */
export function Logo({
  className,
  onImage = false,
  size = "md",
  asLink = true,
}: {
  className?: string;
  onImage?: boolean;
  size?: keyof typeof sizes;
  asLink?: boolean;
}) {
  const img = (
    <img
      src={logoAsset}
      alt="N-PLY Ply &amp; Boards — NPLYBOARDS"
      width={670}
      height={435}
      className={cn("w-auto object-contain", sizes[size])}
    />
  );

  const inner = onImage ? (
    <span className="inline-flex items-center rounded-md bg-ivory/95 px-3 py-1.5 shadow-soft backdrop-blur-sm">
      {img}
    </span>
  ) : (
    img
  );

  if (!asLink) return <span className={cn("inline-flex", className)}>{inner}</span>;

  return (
    <Link
      to="/"
      aria-label="NPLYBOARDS home"
      className={cn("inline-flex items-center transition-opacity duration-200 hover:opacity-90", className)}
    >
      {inner}
    </Link>
  );
}

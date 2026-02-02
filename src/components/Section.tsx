import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, eyebrow, children, className }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-24 px-4 py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-5xl">
        {(eyebrow || title) && (
          <div className="mb-6 sm:mb-8">
            {eyebrow && (
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink shadow-soft ring-1 ring-blush-200">
                <span className="h-1.5 w-1.5 rounded-full bg-lilac" />
                <span>{eyebrow}</span>
              </div>
            )}
            {title && <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}


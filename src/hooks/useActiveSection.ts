import { useEffect, useMemo, useState } from "react";

type Options = {
  rootMargin?: string;
  threshold?: number | number[];
};

export function useActiveSection(sectionIds: string[], options?: Options) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  const opts = useMemo(() => {
    return {
      rootMargin: options?.rootMargin ?? "-35% 0px -55% 0px",
      threshold: options?.threshold ?? [0, 0.1, 0.2, 0.35, 0.5],
    } satisfies Required<Options>;
  }, [options?.rootMargin, options?.threshold]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: opts.rootMargin,
        threshold: opts.threshold,
      },
    );

    for (const el of elements) observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [opts.rootMargin, opts.threshold, sectionIds]);

  return activeId;
}


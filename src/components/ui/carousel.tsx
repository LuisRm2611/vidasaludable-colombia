import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];

type CarouselContextValue = {
  viewportRef: UseEmblaCarouselType[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

export function Carousel({
  opts,
  className,
  children,
}: {
  opts?: Parameters<typeof useEmblaCarousel>[0];
  className?: string;
  children: React.ReactNode;
}) {
  const [viewportRef, api] = useEmblaCarousel(opts);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
  }, [api, onSelect]);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  return (
    <CarouselContext.Provider value={{ viewportRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div className={cn("relative", className)}>{children}</div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) throw new Error("CarouselContent must be used within Carousel");
  return (
    <div ref={ctx.viewportRef} className={cn("overflow-hidden", className)}>
      <div className={cn("flex", (props as any).innerClassName)} {...props} />
    </div>
  );
}

export function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props} />;
}

function useCarousel() {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel controls must be used within Carousel");
  return ctx;
}

export function CarouselPrevious({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Anterior"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 rounded-full border bg-background p-2 shadow disabled:opacity-50",
        className
      )}
      {...props}
    >
      ‹
    </button>
  );
}

export function CarouselNext({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Siguiente"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-background p-2 shadow disabled:opacity-50",
        className
      )}
      {...props}
    >
      ›
    </button>
  );
}

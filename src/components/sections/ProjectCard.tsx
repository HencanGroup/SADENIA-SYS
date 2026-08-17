import { Layers } from "lucide-react";

export function ProjectCard({
  title,
  desc,
  category,
}: {
  title: string;
  desc: string;
  category: string;
}) {
  return (
    <article className="card-lift flex h-full flex-col overflow-hidden rounded-md border border-border bg-card">
      <div className="gradient-hero relative flex h-44 items-center justify-center">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <Layers className="relative size-10 text-sky" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold tracking-wide text-steel uppercase">
          {category}
        </span>
        <h3 className="mt-3 text-lg text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card">
      <div className="h-44 animate-pulse bg-muted" />
      <div className="space-y-3 p-6">
        <div className="h-4 w-20 animate-pulse rounded bg-muted" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}
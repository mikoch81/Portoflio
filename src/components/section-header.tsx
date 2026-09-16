import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand", className)}>
      <span className="h-px w-6 bg-brand/60" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  className,
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("max-w-3xl space-y-5", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={cn("text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]", titleClassName)}>
        {title}
      </h2>
      {lead ? <p className="max-w-2xl text-base leading-relaxed text-fg-2 sm:text-lg">{lead}</p> : null}
    </div>
  );
}

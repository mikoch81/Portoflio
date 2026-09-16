import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 pt-28 pb-24">
      <p className="font-mono text-sm text-fg-3">404</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="max-w-md text-base leading-relaxed text-fg-2">
        The page you are looking for does not exist or has moved.
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}>
        <ArrowLeft className="mr-2 size-4" />
        Back to home
      </Link>
    </section>
  );
}

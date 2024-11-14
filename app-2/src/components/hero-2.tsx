import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero2() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          <span className="font-bold uppercase text-primary">ContentSprout AI</span>
          <ArrowRight size={16} />
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl lg:text-left tracking-tight">
          Examples of Work
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          Analyze NLP, research keywords, scrape Google, and write and edit AI content. Integrates
          with WordPress and has an API. Over 300 Users.
        </p>
        <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center" />
      </div>
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/markuphero-iww1RUq5sHh6bTdKN4h8.webp"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}

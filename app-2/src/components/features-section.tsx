import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/markuphero-oyTknTv7829hICPYvs63.webp"
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-left">Custom Dashboards</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            Modern Designs + Speed
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          Don&apos;t want to use PowerBI or an antiquates tool charging an arm and a leg?
          That&apos;s what we&apos;re here for.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Get started quickly</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Get proof of concepts and start saving</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Ability to integrate AI into any piece of your business
            </span>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" asChild>
            <Link href="#" className="h-12 cursor-pointer text-base md:px-9">
              Schedule a Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

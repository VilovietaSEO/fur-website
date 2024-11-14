import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function BlogSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Thought Leadership</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Our Blog
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
        Learn how to build beautiful landing pages fast.
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="#">
          <Card className="h-full shadow-lg">
            <CardContent className="flex h-full flex-col items-start gap-5 px-0">
              <div className="relative h-52 w-full">
                <Image
                  alt="How to build a beautiful landing page in minutes"
                  src="/images/article-1.avif"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-5">
                <h4 className="text-lg font-semibold">How to Implement AI in Your Business</h4>
                <p className="mb-auto text-muted-foreground">
                  A step-by-step guide to adopting AI, from initial planning to full integration,
                  designed to help you unlock its transformative potential.
                </p>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border bg-accent px-3 py-0.5 text-sm text-accent-foreground">
                    Coding
                  </span>
                  <span className="text-sm text-muted-foreground">Jul 16, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="#">
          <Card className="h-full shadow-lg">
            <CardContent className="flex h-full flex-col items-start gap-5 px-0">
              <div className="relative h-52 w-full">
                <Image
                  alt="How to generate the perfect theme for your website with AI"
                  src="/images/article-2.avif"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-5">
                <h4 className="text-lg font-semibold">How to Use AI to Increase Profit by 25%</h4>
                <p className="mb-auto text-muted-foreground">
                  Discover actionable AI strategies that can optimize efficiency, reduce costs, and
                  drive profitability across your business.
                </p>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border bg-accent px-3 py-0.5 text-sm text-accent-foreground">
                    Design
                  </span>
                  <span className="text-sm text-muted-foreground">May 10, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="#">
          <Card className="h-full shadow-lg">
            <CardContent className="flex h-full flex-col items-start gap-5 px-0">
              <div className="relative h-52 w-full">
                <Image
                  alt="How to build at the speed of no-code without customization limits"
                  src="/images/article-3.avif"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-5">
                <h4 className="text-lg font-semibold">
                  The State of AI (2025): Everything You Need to Know to Scale
                </h4>
                <p className="mb-auto text-muted-foreground">
                  Get up-to-date insights on the latest AI trends, tools, and strategies to help
                  your business harness AI for scalable growth in 2025 and beyond.
                </p>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border bg-accent px-3 py-0.5 text-sm text-accent-foreground">
                    Coding
                  </span>
                  <span className="text-sm text-muted-foreground">Apr 27, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  );
}

import {
  ArrowRight,
  Quote,
  Bot,
  Rocket,
  MessageSquare,
  LineChart,
  Megaphone,
  Workflow,
} from "lucide-react";

import { TextShimmer } from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Particles } from "@/components/magicui/particles";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section className="relative mx-auto px-6 text-center md:px-8 pt-32 max-w-[80rem]">
      <div className="inline-flex h-7 items-center justify-between rounded-full border bg-secondary text-secondary-foreground px-3 text-xs transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in">
        <TextShimmer className="inline-flex items-center justify-center">
          <span className="text-xs text-secondary-foreground/60">
            ✨ Introducing the FUTR of business
          </span>
          <ArrowRight
            size={20}
            className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </TextShimmer>
      </div>
      <h1 className="bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text py-6 text-center text-5xl font-medium font-heading leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] caret-foreground">
        AI Consulting and Tools for Sales, Marketing, &amp; Ops
      </h1>
      <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-xl mx-auto">
        Increase employee performance by 20-40%. Reduce overhead. Increase bottomline revenue.
        Research, communication, reporting, and everything in between.
      </p>
      <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:600ms]">
        <span>Schedule a Call</span>
        <ArrowRight
          size={20}
          className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      </Button>
      <div className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
        <div className="rounded-xl border border-white/10 bg-white/10 bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,hsl(var(--accent)),hsl(var(--accent)),transparent_40%)] before:animate-image-glow before:opacity-0">
          <BorderBeam size={200} anchor={90} duration={10} borderWidth={1.5} />
          <img
            alt="Hero Image"
            src="/images/ai-hub.webp"
            className="relative w-full h-full rounded-[inherit] object-contain border"
          />
        </div>
      </div>
      <Particles
        ease={70}
        size={0.05}
        color="#ffffff"
        quantity={100}
        staticity={40}
        className="absolute inset-0 -z-10 h-full"
      />
      <Card className="container mx-auto max-w-4xl bg-card text-card-foreground p-12 relative">
        <div className="absolute top-8 left-8">
          <Quote className="h-12 w-12 text-primary" />
        </div>
        <div className="flex flex-col items-center text-center space-y-6 pt-8">
          <p className="text-2xl font-medium max-w-2xl">
            <span>Free MVP build out for the first </span>
            <span>
              <span className="text-primary relative inline-block">
                <span className="relative z-10">30</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute top-1/2 left-1/2 w-[200%] h-0.5 bg-card-foreground origin-center rotate-[-35deg] transform -translate-x-1/2 -translate-y-1/2" />
                </span>
              </span>
              <span>, </span>
            </span>
            <span>
              <span className="text-primary relative inline-block">
                <span className="relative z-10">20</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute top-1/2 left-1/2 w-[200%] h-0.5 bg-card-foreground origin-center rotate-[-35deg] transform -translate-x-1/2 -translate-y-1/2" />
                </span>
              </span>
              <span>, </span>
            </span>
            <span>
              <span className="text-primary relative inline-block">
                <span className="relative z-10">10</span>
              </span>
              <span>, </span>
            </span>
            <span>
              <span className="text-primary relative inline-block">
                <span className="relative z-10">5</span>
              </span>
              <span>, </span>
            </span>
            <span>businesses</span>
          </p>
          <div className="flex justify-center items-center gap-8 w-full">
            <div className="flex flex-col items-center gap-3">
              <Avatar className="h-16 w-16 border-2 border-border">
                <AvatarImage src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/Andrew-Headshot0e46a073-11fa-4c7b-9a6d-5524e3657ecc_52b25b61-ad4b-4541-b804-cd853b110866.jpeg" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <h3 className="font-heading text-lg font-medium">Andrew Ansley</h3>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar className="h-16 w-16 border-2 border-border">
                <AvatarImage src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/Hanson-Headshota37a5e13-f055-4067-a8a6-8b78f78d76ce_7a6b0215-7234-4d95-ae0b-9d4b3edf7276.jpeg" />
                <AvatarFallback>HC</AvatarFallback>
              </Avatar>
              <h3 className="font-heading text-lg font-medium">Hanson Cheng</h3>
            </div>
          </div>
        </div>
      </Card>
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-center">Features</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
            AI Solutions That Transform Your Business
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
          We can connect any platform and automate any process while incorporating AI strategists
          and AI execution agents to handle any task.
        </p>
        <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg">
            <CardContent className="flex flex-col items-start gap-5 p-7">
              <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                <Bot className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h4 className="font-heading mb-2 text-lg font-semibold">Executive Enabler</h4>
                <p className="text-muted-foreground">
                  A completely state-of-the-art Ph.D level strategist and assistant for Directors to
                  C-suite. Take your performance from a 9/10 to a 12/10. Believe it or not, the Iron
                  Man &quot;Jarvis&quot; is more real than you think.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="flex flex-col items-start gap-5 p-7">
              <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                <Rocket className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h4 className="font-heading mb-2 text-lg font-semibold">SaaS Slayer</h4>
                <p className="text-muted-foreground">
                  SaaS is a generalist solution and enterprise SaaS solutions that are
                  &quot;custom&quot; cost an arm and a leg. With FUTR and the new AI wave, you can
                  finally make your own solution that fits your business like a glove while giving
                  you a competitive edge.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="flex flex-col items-start gap-5 p-7">
              <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h4 className="font-heading mb-2 text-lg font-semibold">Meetings Moat</h4>
                <p className="text-muted-foreground">
                  We spend far too much time on meetings. FUTR can build you tailored solutions that
                  streamline communications, cut down on meetings, improve productivity, and
                  increase the time employees spend on tasks that actually matter.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="flex flex-col items-start gap-5 p-7">
              <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                <LineChart className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h4 className="font-heading mb-2 text-lg font-semibold">Sales Supercharger</h4>
                <p className="text-muted-foreground">
                  Appointment Setting, Outbound Calls or Email, Social Media Follow ups, etc.
                  Respond instantly or with custom time delay. Never forget to follow up.
                  Automatically scrape and compile the intel you need on any prospect. Don&apos;t
                  sleep on AI + Sales.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="flex flex-col items-start gap-5 p-7">
              <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                <Megaphone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h4 className="font-heading mb-2 text-lg font-semibold">Marketing Mind</h4>
                <p className="text-muted-foreground">
                  Off the shelf AI marketing tools are about as good as a recent college grad, but
                  with FUTR, you can get marketing research, copywriting, conversion optimization,
                  and website creation that is better than employees that cost $100,000 a year.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="flex flex-col items-start gap-5 p-7">
              <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                <Workflow className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h4 className="font-heading mb-2 text-lg font-semibold">Workflow Wizard</h4>
                <p className="text-muted-foreground">
                  FUTR can improve your project management and operations by replacing entire
                  salaries…all while improving performance. Infinitely scalable and incredibly
                  flexible, you can choose to either empower existing employees or reduce the size
                  of your staff.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </section>
  );
}

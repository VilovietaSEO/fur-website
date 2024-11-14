import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Component() {
  return (
    <section className="bg-background py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-heading text-4xl font-bold text-center mb-12">Our Process</h2>
        <Tabs defaultValue="focus" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 mb-12 bg-transparent border-0">
            <TabsTrigger
              value="focus"
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              F
            </TabsTrigger>
            <TabsTrigger
              value="understand"
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              U
            </TabsTrigger>
            <TabsTrigger
              value="tailor"
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              T
            </TabsTrigger>
            <TabsTrigger
              value="reinforce"
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              R
            </TabsTrigger>
          </TabsList>
          <TabsContent value="focus">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-heading text-2xl font-semibold">
                    Focus on Your Biggest Opportunities
                  </h3>
                </div>
                <p className="text-card-foreground mb-6">
                  In our first steps, we meet with you and your leadership team to zero in on the
                  exact pain points and areas where AI can drive the most significant impact. Are
                  you dealing with inefficiencies? Is your team bogged down with repetitive tasks?
                  We assess all relevant aspects of your current workflows and identify high-impact
                  areas where AI could optimize performance and improve results across departments,
                  from sales to finance to marketing.
                </p>
                <div className="bg-secondary p-4 rounded-lg mb-8">
                  <p className="font-semibold mb-2">Why this matters:</p>
                  <p className="text-secondary-foreground">
                    Your time and investment deserve targeted, impactful improvements, not vague
                    promises. We start by building a strong foundation tailored to your goals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="understand">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-heading text-2xl font-semibold">
                    Understand Your Unique Landscape
                  </h3>
                </div>
                <p className="text-card-foreground mb-6">
                  AI can be transformative—but only if it&apos;s deployed with a deep understanding
                  of your business. We conduct thorough audits, from task assessments to
                  department-specific challenges, and even talk with directors to map out your
                  unique processes. We also review your team&apos;s current capabilities and tech
                  stack, ensuring our solutions integrate smoothly with your existing setup.
                </p>
                <div className="bg-secondary p-4 rounded-lg mb-8">
                  <p className="font-semibold mb-2">Why this matters:</p>
                  <p className="text-secondary-foreground">
                    Our understanding of your unique operational landscape means that the AI we
                    design will feel like a natural extension of your team, not a disruptor.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tailor">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-heading text-2xl font-semibold">
                    Tailor Solutions That Drive Immediate and Lasting Impact
                  </h3>
                </div>
                <p className="text-card-foreground mb-6">
                  Every recommendation we make is tailored to your business&apos;s specific needs.
                  This isn&apos;t a standard playbook but a custom-designed roadmap that aligns with
                  your objectives. From developing AI tools that automate repetitive work to
                  implementing advanced analytics that sharpen decision-making, our solutions are
                  built to address your priorities.
                </p>
                <div className="bg-secondary p-4 rounded-lg mb-8">
                  <p className="font-semibold mb-2">Why this matters:</p>
                  <p className="text-secondary-foreground">
                    Cookie-cutter solutions lead to temporary gains, if any. By tailoring AI
                    specifically to your needs, we ensure your investment yields lasting,
                    transformative results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reinforce">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-heading text-2xl font-semibold">
                    Reinforce with Ongoing Support for Seamless Adoption
                  </h3>
                </div>
                <p className="text-card-foreground mb-6">
                  Implementation is just the beginning. Our team provides hands-on training to bring
                  your team up to speed, ensuring they feel confident and empowered to use AI to its
                  fullest potential. With daily check-ins, troubleshooting, and regular adjustments
                  based on feedback, we are with you every step of the way. And we don&apos;t leave
                  until the transition is seamless and you&apos;re seeing real, measurable results.
                </p>
                <div className="bg-secondary p-4 rounded-lg mb-8">
                  <p className="font-semibold mb-2">Why this matters:</p>
                  <p className="text-secondary-foreground">
                    Adopting AI shouldn&apos;t be a daunting task for your team. By reinforcing our
                    solutions with ongoing support, we remove the guesswork, empowering your people
                    to thrive with AI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="flex justify-center mt-8">
          <Button size="lg" className="bg-primary text-primary-foreground">
            Send Me a Proposal
          </Button>
        </div>
      </div>
    </section>
  );
}

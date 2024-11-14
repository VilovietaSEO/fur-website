import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Faq</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What do I get when I work with FUTR?
            <br />
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            You’ll receive a comprehensive AI solution customized to your business’s unique needs,
            covering everything from initial assessment to full implementation and ongoing support.
            We handle data processing, automation, strategy, and training, all designed to elevate
            your team’s productivity and performance.
            <br />
          </AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                What kind of results can I expect?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Our AI solutions typically yield efficiency gains of up to 20% across various
                departments. From cost reduction to productivity boosts, our AI tools are designed
                to create measurable, high-impact results, often helping clients reduce time spent
                on repetitive tasks, improve decision-making speed, and increase sales and
                operational efficiency.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                Is it a template solution?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                No, our solutions are fully customized. We build AI tools and strategies
                specifically tailored to your business needs. Instead of a one-size-fits-all
                approach, we assess your workflows, tech stack, and goals to create AI that
                seamlessly integrates and supports your operations.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionItem>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How is FUTR different from other AI providers?
            <br />
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            FUTR provides a truly tailored experience. Unlike generic SaaS or off-the-shelf AI
            tools, we work closely with you to design, implement, and optimize solutions that
            directly align with your goals. Our process includes in-depth consultations,
            implementation roadmaps, and training to ensure you maximize your AI investment.
            <br />
          </AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                How do you ensure data security?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                We prioritize data privacy and security at every stage of the AI process. From
                secure data processing to compliance with industry standards, our team takes every
                measure to protect your sensitive information. We can also provide more details
                about our security protocols upon request.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                Are there any additional or hidden costs?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Our pricing is transparent and tailored to your business’s needs. Depending on the
                complexity of your AI implementation, costs may include cloud server fees,
                maintenance, or specific AI tool subscriptions, but we discuss all potential
                expenses upfront.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                Do you offer a guarantee?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                While outcomes depend on the scope and specific application of AI, we commit to
                measurable, high-impact results. We work with you to define clear goals and success
                metrics from the start, and our team is dedicated to achieving these targets.
                <br />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How long does it take to implement AI solutions?
            <br />
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            The average implementation timeline varies depending on project scope, but our typical
            timeframe is between 2 to 6 weeks. We provide a detailed roadmap and timeline at the
            start of each project to ensure you know what to expect at every stage.
            <br />
          </AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                Can I get a refund?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Due to the customized nature of our AI solutions, refunds are not offered after the
                project has started. However, we work closely with clients during each phase to
                ensure satisfaction and alignment with your expectations.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                What type of business is best suited for FUTR’s AI solutions?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Our solutions are ideal for businesses with annual revenue of $1 million or more,
                especially those looking to improve efficiency, streamline operations, or enhance
                customer engagement. If you know AI can help but don’t know where to start, we’re
                here to guide you through it.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                What’s the first step if I want to explore AI for my business?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                The first step is a free consultation to discuss your goals, pain points, and any
                questions you have about AI. We’ll create a preliminary roadmap to show you what’s
                possible and help you envision how AI can transform your operations.
                <br />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Will I need to hire additional staff to manage the AI?
            <br />
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            No, our goal is to reduce your reliance on additional staff by providing you with a
            self-sustaining AI solution. We also offer training and support to ensure that your
            current team can easily operate and benefit from the AI tools we implement.
            <br />
          </AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                How does FUTR’s AI solution integrate with my existing systems?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Our AI solutions are designed with integration in mind. We assess your current tech
                stack and workflows to ensure that our AI tools integrate seamlessly with your
                existing systems, minimizing disruptions and maximizing compatibility.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                Can FUTR help if I already use AI tools like ChatGPT or Claude?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Yes, we specialize in optimizing and enhancing your existing AI infrastructure.
                Whether you’re using basic AI tools or have an existing setup, we can help you scale
                their capabilities, improve efficiency, and ensure they’re being used to their full
                potential.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                How do you ensure that your AI solutions align with my business goals?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Our process includes in-depth consultations with your team to fully understand your
                business objectives and challenges. We set SMART goals together and design AI
                solutions that are tailored to support these objectives, ensuring that every
                implementation drives value aligned with your goals.
                <br />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What industries do you have experience working with?
            <br />
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Our AI solutions are industry-agnostic, meaning we can tailor our tools to benefit a
            wide range of industries. Our team has worked with clients in e-commerce, finance,
            healthcare, manufacturing, and more. We’re confident we can adapt our solutions to fit
            your industry’s unique requirements.
            <br />
          </AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                What kind of ongoing support is included after the AI is implemented?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                We offer continuous support options to ensure your AI solutions keep running
                smoothly. This includes troubleshooting, updates, and ongoing optimization. Our
                support team is available to assist with any questions or adjustments as your
                business evolves.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                Is there a minimum contract term for your AI services?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                We offer flexible contract options depending on the scope and nature of the project.
                Whether you need a one-time implementation or ongoing support, we can structure a
                plan that meets your specific requirements. Our team will discuss options with you
                during the initial consultation.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                How will I measure the ROI of FUTR’s AI solution?
                <br />
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                We work with you to set clear, measurable success metrics from the start, tailored
                to your business goals. Whether it’s time saved, cost reductions, revenue growth, or
                productivity increases, we provide regular reports and performance tracking to
                quantify the impact of our AI solutions. Our goal is to ensure you see a tangible
                return on your investment.
                <br />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

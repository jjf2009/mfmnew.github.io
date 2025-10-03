const Join = () => {
  return (
    <section id="join" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <hr className="border-border mb-12" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Join us</h2>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-lg">Hi!</p>

          <p>
            Welcome to Move Fast and Break Things: a community where passionate engineers collaborate, experiment, and
            grow together – fast.
          </p>

          <div>
            <p className="font-semibold text-foreground">Who are we?</p>
            <p>
              We are a group of motivated, self-organized, hardworking, and kind people of very different levels of
              experience who are passionate about software engineering and product building. Among our members are
              experienced engineers and leaders such as Ivan Perkhun (
              <a href="https://t.me/perhun" target="_blank" rel="noopener noreferrer" className="shine-animation">
                Lead DS at BUDU
              </a>
              ), Irina Kogai (
              <a
                href="https://www.linkedin.com/in/ikogai/"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-animation"
              >
                Engineering Lead at YouTalk
              </a>
              ), and Yurij Mikhalevich (
              <a
                href="https://www.linkedin.com/in/yurijmikhalevich/"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-animation"
              >
                Staff AI Engineering Lead at QA Wolf
              </a>
              ).
            </p>
          </div>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "The community helped gain teamwork experience, master Git, and explore web development. I've tried AI, web,
            and mobile development here and discovered my true passion," –{' '}
            <a
              href="https://github.com/OstaptsovDanil"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-animation"
            >
              Danil Ostaptsov
            </a>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "The community motivates me to work on my project every day," –{' '}
            <a
              href="https://github.com/Bee133"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-animation"
            >
              Ivan Pchelka
            </a>
          </blockquote>

          <div>
            <p className="font-semibold text-foreground">What we do?</p>
            <p>
              We build fun, cool projects together, like{' '}
              <a
                href="https://github.com/move-fast-and-break-things/aibyss"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-animation"
              >
                Aibyss
              </a>{' '}
              – a game where you code an AI to compete in a survival game, – and{' '}
              <a
                href="https://github.com/move-fast-and-break-things/minerva"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-animation"
              >
                Minerva
              </a>{' '}
              – an AI-powered bot that helps us learn more. We also host talks and webinars, and learn new things, like
              recent advancements in Quantum Computing, all the time!
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground">What will you get if you join us?</p>
            <p>Opportunity to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>build AI-driven and educational projects like Minerva or Aibyss</li>
              <li>develop full-stack, DevOps, or ML practical skills through hands-on collaboration</li>
              <li>learn time-saving workflows (e.g., CI/CD, Agile practices) to boost productivity</li>
              <li>
                get meaningful feedback during weekly peer code reviews and bi-weekly community meetings to boost your
                professional growth
              </li>
              <li>lead projects and mentor others</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground">Is there a fee?</p>
            <p>
              While the opportunities you receive may be expensive elsewhere, joining our community costs $0 USD. This
              lets us, unlike other communities and courses, value quality of the community members over quantity. We
              believe all of us can learn from each other regardless of experience or seniority.
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground">What is expected from you?</p>
            <p>
              To maintain our $0 USD membership, we ask you to contribute regularly. <strong>Every</strong> community
              member is expected to participate in the community projects (or lead new ones), attend and host community
              meetings and webinars, and participate in and organize community events. We take this very seriously.
              Members typically contribute 2–4 hours weekly. The best part is that the actual learning, growth, and
              development happen when you actively do all of these things!
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground">How to join?</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Find an issue:</strong> Browse{' '}
                <a
                  href="https://github.com/move-fast-and-break-things"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine-animation"
                >
                  our GitHub projects
                </a>{' '}
                and look for "good first issue" labels.
              </li>
              <li>
                <strong>Claim it:</strong> Comment on the issue to let us know you're working on it.
              </li>
              <li>
                <strong>Code:</strong> Submit a PR with your solution.
              </li>
              <li>
                <strong>Collaborate:</strong> Work with us to refine and merge your PR.
              </li>
              <li>
                <strong>Join:</strong> We'll email you within 48 hours after merging by email associated with your Git
                commits!
              </li>
            </ol>
          </div>

          <p>
            Ready to contribute to the community and believe we will have fun working on cool projects together? Start
            by picking your first GitHub issue today!
          </p>

          <p>
            If you have any questions, contact us on{' '}
            <a
              href="mailto:mfbt.community@gmail.com"
              className="shine-animation"
              target="_blank"
              rel="noopener noreferrer"
            >
              mfbt.community@gmail.com
            </a>
            .
          </p>
        </div>

        <hr className="border-border mt-12" />
      </div>
    </section>
  );
};

export default Join;

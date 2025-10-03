const MissionValues = () => {
  const values = [
    {
      title: 'Kindness',
      description:
        'We prioritize respect and kindness towards every member of our community. We encourage a culture of respect where everyone feels valued and appreciated.',
    },
    {
      title: 'Mutual Assistance',
      description:
        'We strongly believe in the power of collaboration and helping one another. Members are encouraged to support and assist each other in overcoming challenges and achieving their programming goals.',
    },
    {
      title: 'Openness',
      description:
        'We embrace a culture of curiosity and encourage members to ask questions freely. We understand that questioning leads to deeper understanding and growth.',
    },
    {
      title: 'Courage',
      description:
        'We encourage our members to step out of their comfort zones and take risks. We believe that by embracing new challenges and exploring uncharted territories, we can grow both personally and professionally.',
    },
    {
      title: 'Curiosity',
      description:
        'Learning is an exciting journey, and we celebrate the joy of discovering new things. We foster an environment where members can explore new technologies, share knowledge, and embark on learning adventures together.',
    },
  ];

  return (
    <section id="mission" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to making our community a welcoming space for everyone. Whether you're a seasoned
              developer, a beginner, or just curious, you're welcome here! We dedicated to fostering growth,
              collaboration, and continuous learning. Our mission is to cultivate an environment where individuals
              support each other in developing exceptional programs and expanding their knowledge.
            </p>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Our Values</h2>
            <p className="text-lg text-muted-foreground mb-8">
              To foster a positive community, we encourage behaviors such as:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;

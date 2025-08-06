export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create & Share Assessment",
      description: "Using Equip's Question Banks, or add your own questions"
    },
    {
      number: "02", 
      title: "Candidates attempt remotely",
      description: "Typically, 30 mins to 1 hour. With anti-cheating measures"
    },
    {
      number: "03",
      title: "Shortlist only the best",
      description: "Equip automatically evaluates candidate responses"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Only 3 Steps?{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              It's Like We're Spoiling You!
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="text-center space-y-6 group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-feature">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-primary opacity-30"></div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const Skills = () => {
  const skills = [
    "JavaScript", "CSS", "Python", "SQL", "ReactJS", "C", "Java", "NodeJS", 
    "MongoDB", "Express.js", "Webservers", "English Language", 
    "English Communication", "Aptitude Test", "ML", "Data Science", 
    "Attention to Detail", "Google Ads", "Digital Marketing", 
    "Interpersonal Skills", "FB & Insta Ads"
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              SKILLS AND TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            We're like a Skills Encyclopedia,{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Minus the Dust
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex-shrink-0 bg-card hover:bg-accent/50 border border-border rounded-xl px-6 py-4 flex items-center space-x-3 transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {skill.charAt(0)}
                  </span>
                </div>
                <span className="text-foreground font-medium whitespace-nowrap group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
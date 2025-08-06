export const CompanyLogos = () => {
  const companies = [
    "LG", "Schlumberger", "MIT", "Ant Group", "Wipro",
    "Fortrea", "Joola", "MailerLite", "Hangry", "Stepful"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Loved by these companies, and so many more
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div 
              key={company} 
              className="flex items-center justify-center p-4 rounded-xl bg-card hover:bg-accent/50 transition-all duration-300 group cursor-pointer w-full h-20"
            >
              <span className="text-muted-foreground group-hover:text-foreground font-semibold text-sm transition-colors">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
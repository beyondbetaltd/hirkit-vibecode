import { Card, CardContent } from "@/components/ui/card";
import featureAssessment from "@/assets/feature-assessment.png";
import featureLibrary from "@/assets/feature-library.png";
import featureSecurity from "@/assets/feature-security.png";
import featureResults from "@/assets/feature-results.png";

export const Features = () => {
  const features = [
    {
      title: "Quick Assessment Creation",
      description: "In < 1 minute, Specify Role, Select Skills and Questions and Share Assessment with candidates.",
      image: featureAssessment,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Our Questions and Yours",
      description: "Choose from 10s of 1000s of Questions across Skills and Difficulty Levels. Or add questions of your own.",
      image: featureLibrary,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Disable Google and ChatGPT",
      description: "Our Automated AI Proctoring is best in-class. No more concerns about candidates cheating on online tests",
      image: featureSecurity,
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      title: "Real-time Results & Simple Dashboards",
      description: "See results immediately on candidate submission. Filter, export and easily manage pipeline",
      image: featureResults,
      gradient: "from-green-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              EQUIP FEATURES
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Features So Good, They Deserve{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Their Own Corner Office
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`group hover:shadow-feature transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm hover:scale-105 ${
                index % 2 === 0 ? 'lg:translate-y-8' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
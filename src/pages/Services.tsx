import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Zap, Shield, Users, Search, PenTool, Rocket } from "lucide-react";
import { Fragment } from "react";

const Services = () => {
  const mainServices = [
    {
      title: "Custom iOS Apps",
      description: "Full-cycle development from idea to App Store.",
      icon: "https://media.contra.com/image/upload/w_800,q_auto/mjjo8dmbff0kh8jrd52a",
      features: ["Native iOS Development", "Swift & SwiftUI Expertise", "App Store Deployment", "Maintenance & Support"]
    },
    {
      title: "Custom Android Apps",
      description: "Full-cycle development from idea to Play Store.",
      icon: "https://media.contra.com/image/upload/w_800,q_auto/mjjo8dmbff0kh8jrd52a",
      features: ["Native Android Development", "Kotlin & Java Expertise", "Play Store Deployment", "Maintenance & Support"]
    },
    {
      title: "Cross-Platform Strategy",
      description: "Strategic planning for both iOS and Android platforms.",
      icon: "https://media.contra.com/image/upload/w_800,q_auto/k2ngurbzbyogiici5ekt",
      features: ["Platform-Specific Optimization", "Unified User Experience", "Code Architecture Planning", "Performance Optimization"]
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Architecture",
      description: "Clean, maintainable code structure following MVVM and Clean Architecture patterns"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "App optimization for speed, memory usage, and battery efficiency"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "Secure data handling, encryption, and authentication systems"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultation & Strategy",
      description: "Technical guidance and development strategy for your mobile projects"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              My Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive iOS and Android development services to bring your ideas to life
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <Card 
                key={service.title}
                className="p-8 bg-gradient-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-primary' : 'bg-accent'
                      }`}></div>
                      <span className="text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild 
                  variant={index === 0 ? "default" : index === 1 ? "outline" : "secondary"}
                  size="lg"
                  className="w-full"
                >
                  <a href="/contact">Get Started</a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">
              Additional Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="p-6 text-center bg-gradient-card shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    index % 4 === 0 ? 'bg-primary/10 text-primary' :
                    index % 4 === 1 ? 'bg-accent/10 text-accent' :
                    index % 4 === 2 ? 'bg-accent-gold/10 text-accent-gold' :
                    'bg-secondary/10 text-secondary'
                  } group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-secondary mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <Card className="p-8 lg:p-12 bg-gradient-hero text-white shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Development Process</h2>
              <p className="text-xl text-white/90">From concept to deployment, here's how I work</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-stretch gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your requirements and goals", icon: <Search className="w-7 h-7" aria-hidden="true" /> },
                { step: "02", title: "Design", desc: "Creating wireframes and UI/UX designs", icon: <PenTool className="w-7 h-7" aria-hidden="true" /> },
                { step: "03", title: "Development", desc: "Building with clean, efficient code", icon: <Code className="w-7 h-7" aria-hidden="true" /> },
                { step: "04", title: "Deployment", desc: "Testing, optimization, and App Store/Play Store launch", icon: <Rocket className="w-7 h-7" aria-hidden="true" /> }
              ].map((phase, idx, arr) => (
                <Fragment key={phase.step}>
                  <div
                    className="flex-1 text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full bg-white/15 group-hover:bg-white/20 transition" />
                      <div className="relative w-full h-full rounded-full flex items-center justify-center">
                        {phase.icon}
                      </div>
                      <span className="absolute -bottom-2 -right-2 text-xs font-bold bg-white text-black rounded-full px-2 py-0.5 shadow">{phase.step}</span>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{phase.title}</h4>
                    <p className="text-white/80 text-sm">{phase.desc}</p>
                  </div>

                  {idx < arr.length - 1 && (
                    <div className="hidden md:flex w-12 items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-white/20" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
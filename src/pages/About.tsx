import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Swift", "Kotlin", "iOS SDK", "Android SDK", "SwiftUI", "UIKit", "Jetpack Compose", 
    "Material Design", "Firebase", "Core Data", "Room Database", "Retrofit", "Alamofire",
    "Coroutines", "MVVM", "Clean Architecture", "Git", "REST APIs", "UI/UX Design", "Performance Optimization"
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Get to know the developer behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="p-8 bg-gradient-card shadow-lg border-0">
                <h2 className="text-2xl font-bold text-secondary mb-6">My Story</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Passionate iOS and Android Developer with expertise in Swift, Kotlin, and modern mobile architectures. 
                  Experienced in creating user-centric apps for both platforms with smooth UI and robust backend integration.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I believe in writing clean, maintainable code and following best practices to deliver 
                  high-quality mobile applications that users love across iOS and Android platforms. My focus is on creating seamless 
                  user experiences while ensuring optimal performance and scalability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-secondary font-medium">BS in Software Engineering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-secondary font-medium">3+ years developing scalable iOS & Android apps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-secondary font-medium">Specializing in Swift & Kotlin</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              {/* Skills */}
              <Card className="p-8 bg-gradient-card shadow-lg border-0">
                <h3 className="text-xl font-bold text-secondary mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`${
                        index % 3 === 0 ? 'bg-primary/10 text-primary hover:bg-primary/20' :
                        index % 3 === 1 ? 'bg-accent/10 text-accent hover:bg-accent/20' :
                        'bg-success/10 text-success hover:bg-success/20'
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Philosophy */}
              <Card className="p-8 bg-gradient-card shadow-lg border-0">
                <h3 className="text-xl font-bold text-secondary mb-6">Development Philosophy</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-secondary">User-Centric Design</h4>
                    <p className="text-muted-foreground text-sm">Every feature should serve a purpose and enhance user experience</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-secondary">Clean Architecture</h4>
                    <p className="text-muted-foreground text-sm">Maintainable, testable, and scalable code structure</p>
                  </div>
                  <div className="border-l-4 border-success pl-4">
                    <h4 className="font-semibold text-secondary">Continuous Learning</h4>
                    <p className="text-muted-foreground text-sm">Staying updated with latest iOS and Android development trends</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
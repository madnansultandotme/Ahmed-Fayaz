import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, Code2, Smartphone, Zap, Users, Github, Linkedin, ExternalLink } from "lucide-react";

const Home = () => {
  const skills = ["Kotlin", "Java", "Android SDK", "Material Design", "Firebase", "MVVM"];
  const stats = [
    { label: "Years Experience", value: "3+", icon: <Code2 className="w-5 h-5" /> },
    { label: "Apps Developed", value: "25+", icon: <Smartphone className="w-5 h-5" /> },
    { label: "Happy Clients", value: "15+", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional and Clean */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-6">
                <Badge variant="outline" className="text-white border-white/20 bg-white/10 backdrop-blur-sm">
                  Available for Freelance Projects
                </Badge>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ahmed Fayaz
                <span className="block text-3xl lg:text-4xl font-normal text-white/80 mt-2">
                  Android Developer
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                Crafting exceptional mobile experiences with <span className="text-white font-medium">Kotlin</span> & <span className="text-white font-medium">Java</span>. 
                Specialized in modern Android architecture and user-centric design.
              </p>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Link to="/projects" className="inline-flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-black hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <Link to="/contact" className="inline-flex items-center">
                    <Mail className="mr-2 w-4 h-4" />
                    Get In Touch
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                <a href="https://www.linkedin.com/in/ahmed-fayaz-268758261" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://contra.com/ahmed_fayaz_n6f1ycoi" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image & Stats */}
            <div className="text-center lg:text-right">
              <div className="relative inline-block mb-8">
                <div className="w-80 h-80 relative">
                  <img
                    src="https://media.contra.com/image/upload/w_800,q_auto/ocyceabygm5upliof9ml"
                    alt="Ahmed Fayaz - Android Developer"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-4 ring-white/20"></div>
                </div>
                
                {/* Floating Card */}
                <Card className="absolute -bottom-6 -left-6 p-4 bg-white/95 backdrop-blur-sm shadow-xl border-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-secondary">Available for work</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="p-8 text-center bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 border-0 animate-slide-up transform hover:scale-105" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              3+ years of dedicated Android development with expertise in modern technologies and best practices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-secondary mb-3">Android Developer</h3>
                <p className="text-primary font-medium mb-2">Freelance • 2021 - Present</p>
                <p className="text-muted-foreground">
                  Specialized in developing high-quality Android applications using Kotlin, Java, and modern Android architecture patterns. 
                  Successfully delivered 25+ projects for diverse clients worldwide.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-secondary mb-3">Key Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Built apps with 10K+ downloads on Google Play Store
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Expertise in MVVM, Clean Architecture, and Jetpack Compose
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    Implemented Firebase, Room Database, and RESTful APIs
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="p-8 bg-gradient-primary text-white shadow-xl border-0">
                <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Kotlin", "Java", "Android SDK", "Jetpack Compose", 
                    "MVVM", "Firebase", "Room Database", "Material Design"
                  ].map((tech, index) => (
                    <div key={tech} className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <img
                  src="https://media.contra.com/image/upload/w_800,q_auto/ocyceabygm5upliof9ml"
                  alt="Ahmed Fayaz working on Android development"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute inset-0 rounded-2xl ring-4 ring-primary/20"></div>
              </div>
            </div>

            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                About Ahmed Fayaz
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Android developer with over 3 years of experience creating innovative mobile solutions. 
                  My journey in mobile development started with a fascination for creating apps that solve real-world problems 
                  and enhance user experiences.
                </p>
                <p>
                  Specializing in Kotlin and Java, I focus on building scalable, maintainable applications using modern 
                  Android architecture patterns. From concept to Play Store deployment, I ensure every project meets 
                  the highest standards of quality and performance.
                </p>
                <p>
                  When I'm not coding, I enjoy staying updated with the latest Android technologies, contributing to 
                  open-source projects, and helping fellow developers in the community.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-dark transform hover:scale-105 transition-all duration-300">
                  <Link to="/about" className="inline-flex items-center">
                    Learn More About Me
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Building the Future of Mobile
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            From concept to Play Store, I create Android applications that users love. 
            Focused on performance, usability, and modern design principles.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Smart Cal",
                desc: "Calendar & task management with intelligent reminders",
                image: "https://media.contra.com/image/upload/w_800,q_auto/mvp25qow9puheqcavm4a"
              },
              {
                title: "Fit Pro App", 
                desc: "Personalized fitness tracking and workout planning",
                image: "https://media.contra.com/image/upload/w_800,q_auto/ocyceabygm5upliof9ml"
              }
            ].map((project, index) => (
              <Card key={project.title} className="group overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border-0 animate-slide-up transform hover:scale-105" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-secondary mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <Button asChild size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/projects" className="inline-flex items-center">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
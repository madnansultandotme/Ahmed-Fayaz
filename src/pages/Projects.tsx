import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import datingapp from "@/assets/dating-app.png"
import medicalapp from "@/assets/medical-app.png"
import musicapp from "@/assets/music-app.png"
import nikeapp from "@/assets/nike-app.png"

const Projects = () => {
  const projects = [
    {
            title: "Live Streaming App",
      description: "Real-time live streaming platform with interactive chat and audience engagement tools.",
      image: "https://media.contra.com/image/upload/w_800,q_auto/sxs53lkxl5dunctgetgk",
      link: "https://contra.com/p/ZBkbAekN-live-streaming-app"
    },
    {
      title: "Medical Appointment App",
      description: "Healthcare app for booking appointments, searching dentists, and managing upcoming medical appointments with user-friendly interface.",
      image: medicalapp,
      link: "#"
    },
    {
      title: "Nike Collection App",
      description: "E-commerce mobile app for Nike shoe collection with product details, size selection, and shopping cart functionality.",
      image: nikeapp,
      link: "#"
    },
    {
      title: "Music Streaming App",
      description: "Modern music streaming platform with curated playlists, trending music discovery, and personalized user experience.",
      image: musicapp,
      link: "#"
    },
    {
      title: "Dating App",
      description: "Social dating application with profile matching, chat features, and intuitive swipe-based user interactions.",
      image: datingapp,
      link: "#"
    },
    {
      title: "Karaye Pay Project", 
      description: "Comprehensive rental management system with payment processing and tenant notifications.",
      image: "https://media.contra.com/image/upload/w_800,q_auto/jjcxug3p0lnrqwrywmyp",
      link: "https://contra.com/p/LoEXbWgW-karaye-pay-project"
    },
    {

      title: "Smart Cal",
      description: "A smart calendar and task manager app with intelligent reminders and scheduling features.",
      image: "https://media.contra.com/image/upload/w_800,q_auto/zjsi8tfsr2xewzocpwlf",
      link: "https://contra.com/p/Xvr3ENsW-smart-cal"
    },
    {
      title: "Fit Pro App",
      description: "Comprehensive fitness tracking application with personalized workout plans and progress monitoring.",
      image: "https://media.contra.com/image/upload/w_800,q_auto/ocyceabygm5upliof9ml",
      link: "https://contra.com/p/MNo2bM2v-fit-pro-app"
    },
    {
      title: "QAU APP",
      description: "The official QAU Android app offers instant notifications, real-time bus tracking, and easy access to university resources, with more features.",
      image: "https://media.contra.com/image/upload/w_800,q_auto/afeuoljeqme6px1qsjoq",
      link: "https://contra.com/p/bbqQPgok-qau-app"
    },
    {
      title: "Mind Health Application",
      description: "Mental wellness platform with mindfulness exercises, mood tracking, and guided meditation.",
      image: "https://media.contra.com/image/upload/w_800,q_auto/mvp25qow9puheqcavm4a",
      link: "https://contra.com/p/Xo6OFAbe-mind-health-application"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of iOS and Android applications I've built with passion and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`group overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 animate-fade-in ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                      index === 0 ? 'h-80' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <h3 className={`font-bold text-secondary mb-3 group-hover:text-primary transition-colors ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-muted-foreground mb-6 ${
                    index === 0 ? 'text-lg leading-relaxed' : 'text-sm'
                  }`}>
                    {project.description}
                  </p>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-hero text-white shadow-xl border-0">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Next App?</h2>
              <p className="mb-6 text-white/90">
                Let's collaborate to bring your mobile app idea to life with cutting-edge iOS and Android development.
              </p>
              <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-secondary transform hover:scale-105 transition-all duration-300">
                <a href="/contact">Start a Project</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
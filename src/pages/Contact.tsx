import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, ExternalLink, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Get in touch via email",
      link: "mailto:Malikahmedfayaz@gmail.com",
      display: "Malikahmedfayaz@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/ahmed-fayaz-268758261",
      display: "LinkedIn Profile"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "Contra",
      description: "View my portfolio on Contra",
      link: "https://contra.com/ahmed_fayaz_n6f1ycoi",
      display: "Contra Portfolio"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background text-black" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your Android app idea to life? Let's discuss your project and create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card-gradient shadow-medium">
              <div className="flex items-center space-x-3 mb-12">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Send a Message</h2>
              </div>
              
              <form className="space-y-12">
                <div className="grid md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project inquiry" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 bg-hero-gradient text-black shadow-strong">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="text-black/90 mb-6">
                  I'm always excited to work on new Android projects. Whether you need a complete app 
                  from scratch or want to improve an existing one, I'm here to help.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Free project consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>Flexible engagement models</span>
                  </div>
                </div>
              </Card>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <Card 
                    key={method.title}
                    className="p-6 bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1"
                  >
                    <a 
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <p className="text-sm text-primary font-medium">{method.display}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </Card>
                ))}
              </div>

              {/* Availability */}
              <Card className="p-6 bg-card-gradient shadow-soft">
                <h3 className="font-semibold text-secondary mb-3">Current Availability</h3>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-secondary">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently accepting projects for Q2 2024. Book your slot early!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
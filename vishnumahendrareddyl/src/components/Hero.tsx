import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-primary font-medium text-lg">Hello, I'm</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-hero-text leading-tight">
                Vishnu Mahendra Reddy L
              </h1>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-hero-text">
                  Full Stack Developer & Cybersecurity Analyst
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl">As a Full Stack Developer and Cybersecurity Analyst, I specialize in developing secure, high-performance applications — merging frontend finesse with backend strength and cybersecurity best practices.</p>
              </div>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-coral group" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="btn-outline-coral" onClick={scrollToContact}>
                Get In Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex space-x-6 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:vishnumahenadrreddy@gmail.com" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image with decorative elements */}
          <div className="relative lg:flex justify-center animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative">
              {/* Main profile image container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full overflow-hidden">
                    <img src="/lovable-uploads/334de3c0-fc27-41b6-a125-05911abe53cf.png" alt="Vishnu Mahendra Reddy L" className="w-full h-full object-cover scale-110" />
                  </div>
                </div>
                
                {/* Floating tech stack icons */}
                <div className="absolute -top-4 -right-4 bg-card p-3 rounded-lg shadow-lg animate-float">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card p-3 rounded-lg shadow-lg animate-float" style={{
                animationDelay: "1s"
              }}>
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -left-8 bg-card p-3 rounded-lg shadow-lg animate-float" style={{
                animationDelay: "2s"
              }}>
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground">Scroll down</span>
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>;
}
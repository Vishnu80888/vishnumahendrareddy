import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Projects() {
  const projects = [{
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  }, {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team communication, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  }, {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "Real-time weather data visualization with interactive charts, forecasting, and location-based insights.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Python", "D3.js", "FastAPI", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }, {
    id: 4,
    title: "Social Media Platform",
    description: "Modern social networking platform with real-time messaging, content sharing, and user engagement features.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    technologies: ["React", "Express", "MongoDB", "WebSocket", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }, {
    id: 5,
    title: "AI-Powered Content Generator",
    description: "Content creation tool powered by AI with customizable templates, SEO optimization, and multi-format export.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Next.js", "OpenAI API", "Supabase", "Vercel", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  }, {
    id: 6,
    title: "Fitness Tracking Mobile App",
    description: "Cross-platform fitness application with workout tracking, nutrition monitoring, and social challenges.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "Health APIs", "Push Notifications"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }];
  return <section id="projects" className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8">Featured Work</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => <div key={project.id} className="project-card group animate-fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="btn-coral" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => <div key={project.id} className="project-card group animate-fade-in-up" style={{
            animationDelay: `${(index + 3) * 0.1}s`
          }}>
                <div className="relative overflow-hidden">
                  
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map(tech => <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>)}
                    {project.technologies.length > 3 && <span className="skill-tag text-xs">
                        +{project.technologies.length - 3}
                      </span>}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="btn-coral flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-outline-coral group">
            View All Projects on GitHub
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
}
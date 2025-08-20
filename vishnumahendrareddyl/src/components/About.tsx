import { Code, Database, Smartphone, Globe, Server, Wrench } from "lucide-react";
export function About() {
  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
    backend: ["Node.js", "Python", "Express.js", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Postman", "Jest", "Cypress", "Webpack"]
  };
  const skillCategories = [{
    title: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    skills: skills.frontend,
    color: "from-blue-500 to-purple-600"
  }, {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: skills.backend,
    color: "from-green-500 to-teal-600"
  }, {
    title: "Tools & Technologies",
    icon: <Wrench className="h-6 w-6" />,
    skills: skills.tools,
    color: "from-orange-500 to-red-600"
  }];
  return <section id="about" className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience building scalable web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile and bio */}
          <div className="space-y-6">
            <div className="relative">
              <img src="/lovable-uploads/334de3c0-fc27-41b6-a125-05911abe53cf.png" alt="About Vishnu Mahendra Reddy L" className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Hello! I'm Vishnu Mahendra Reddy L
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>I'm a passionate full-stack developer and aspiring cybersecurity analyst, eager to build secure and user-focused digital experiences. My journey began with a degree in computer science, where I developed a strong foundation in software development and a growing interest in cybersecurity.

I enjoy working with technologies like React, TypeScript, and Node.js to create clean, scalable web applications — while always keeping performance and security in mind. I'm especially motivated by projects that solve real-world problems and make technology more accessible and reliable.

Outside of coding, I love exploring new tools, contributing to open-source, and sharing what I learn through writing and mentoring whenever I can. I'm always looking for opportunities to grow, collaborate, and make an impact.</p>
                
                
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">6 months</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center text-primary mb-12">
            Skills & Technologies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => <div key={category.title} className="space-y-4 animate-fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of scalable web applications serving 100k+ users. Mentored junior developers and established coding standards.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"]
    },
    {
      id: 2,
      type: "work",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed MVP for B2B SaaS platform from ground up. Collaborated with design team to create intuitive user experiences.",
      achievements: [
        "Built core product features used by 500+ businesses",
        "Integrated payment processing and subscription management",
        "Achieved 99.9% uptime through robust error handling"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe", "Docker"]
    },
    {
      id: 3,
      type: "work",
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.",
      achievements: [
        "Delivered 20+ projects with 100% client satisfaction",
        "Improved Core Web Vitals scores by average of 35%",
        "Established component library used across multiple projects"
      ],
      technologies: ["React", "SASS", "Webpack", "Figma", "Git"]
    }
  ];

  const education = [
    {
      id: 1,
      type: "education",
      title: "Computer Science Engineering",
      company: "Jain Institute of Technology",
      location: "Davangere, Karnataka, India",
      period: "2022 - 2026",
      description: "Comprehensive engineering program focusing on software development, algorithms, and cybersecurity.",
      achievements: [
        "Specialized in cybersecurity and software engineering",
        "Completed full-stack development projects",
        "Strong foundation in computer science fundamentals"
      ],
      technologies: ["Java", "Python", "C++", "JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      type: "education",
      title: "PUC (Pre-University Course)",
      company: "Jain University",
      location: "Davangere, Karnataka, India",
      period: "2020 - 2022",
      description: "Pre-university education with focus on science and mathematics, preparing for engineering studies.",
      achievements: [
        "Completed with good academic performance",
        "Strong foundation in mathematics and physics",
        "Developed analytical and problem-solving skills"
      ],
      technologies: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      id: 3,
      type: "education",
      title: "SSLC (Secondary School Leaving Certificate)",
      company: "KSS English Medium School",
      location: "Davangere, Karnataka, India",
      period: "2018 - 2019",
      description: "Secondary education with comprehensive curriculum and strong academic foundation.",
      achievements: [
        "Completed secondary education successfully",
        "Developed strong communication skills",
        "Built foundation for higher studies"
      ],
      technologies: ["English", "Mathematics", "Science", "Social Studies"]
    }
  ];

  const TimelineItem = ({ item, isLast }: { item: any; isLast: boolean }) => (
    <div className="relative flex">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-full bg-border"></div>
      )}
      
      {/* Timeline dot */}
      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-background shadow-lg">
        {item.type === "work" ? (
          <Briefcase className="h-6 w-6 text-white" />
        ) : (
          <GraduationCap className="h-6 w-6 text-white" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 ml-8 pb-12">
        <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <div className="text-primary font-medium mb-2">
              {item.company}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {item.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {item.location}
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Key Achievements:
            </h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement: string, index: number) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech: string) => (
              <span key={tech} className="skill-tag text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-0">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={experience.id}
                  item={experience}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
              Education
            </h3>
            <div className="space-y-0">
              {education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Certifications & Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">AWS Certified Solutions Architect</h4>
              <p className="text-sm text-muted-foreground">Amazon Web Services</p>
              <p className="text-xs text-muted-foreground mt-1">2023</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">React Developer Certification</h4>
              <p className="text-sm text-muted-foreground">Meta</p>
              <p className="text-xs text-muted-foreground mt-1">2022</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Google Analytics Individual Qualification</h4>
              <p className="text-sm text-muted-foreground">Google</p>
              <p className="text-xs text-muted-foreground mt-1">2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
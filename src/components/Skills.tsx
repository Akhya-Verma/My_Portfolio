import { 
  Code2, 
  Globe, 
  Brain, 
  Wrench, 
  Database, 
  BookOpen
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Java", "C", "C++", "Python"],
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "REST APIs"],
    color: "from-green-500/20 to-green-600/20",
  },
  {
    icon: Brain,
    title: "Machine Learning & Data",
    skills: ["TensorFlow", "Keras", "OpenCV", "DeepFace", "Scikit-learn", "Pandas", "NumPy"],
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ", "AWS", "Google Cloud", "Flask", "Streamlit"],
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "Oracle", "MongoDB"],
    color: "from-red-500/20 to-red-600/20",
  },
  {
    icon: BookOpen,
    title: "CS Fundamentals",
    skills: ["DSA", "OS", "DBMS", "OOP", "Software Engineering", "System Design"],
    color: "from-cyan-500/20 to-cyan-600/20",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            My Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning programming, machine learning, web development, 
            and cloud technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon size={24} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

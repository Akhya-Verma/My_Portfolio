import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bone Break Classification",
    category: "Deep Learning • Medical Imaging",
    description: "CNN model for classifying 10 types of bone fractures with 80% accuracy. Includes preprocessing with OpenCV/PIL and deployed with Flask + custom web UI.",
    tech: ["TensorFlow", "OpenCV", "Flask", "PIL"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    github: "https://github.com/Akhya-Verma/BONE-BREAK-CLASSIFICATION",
  },
  {
    title: "Anomaly Detection on Healthcare Data",
    category: "Machine Learning • Data Science",
    description: "Detects anomalies in healthcare provider data using Isolation Forest, Autoencoders, and DBSCAN with 90% accuracy. Comprehensive EDA and visualization.",
    tech: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    github: "https://github.com/Akhya-Verma/Anomaly-Detection-on-Healthcare-Providers-Data",
  },
  {
    title: "Emotion-Based Music Recommendation",
    category: "Computer Vision • API Integration",
    description: "Real-time emotion detection using DeepFace with YouTube API integration for personalized playlist recommendations based on detected mood.",
    tech: ["DeepFace", "Flask", "YouTube API", "JavaScript"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    github: "https://github.com/Akhya-Verma/EMOTION-BASED-MUSIC-RECOMMENDATION-SYSTEM",
  },
  {
    title: "Anime Recommendation System",
    category: "Machine Learning • Recommendation",
    description: "Multi-approach recommendation engine with content-based, user-based, and item-based collaborative filtering. Users can choose their preferred recommendation style.",
    tech: ["Python", "Pandas", "Scikit-learn", "Flask"],
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop",
    github: "https://github.com/Akhya-Verma/Anime-Recommendation-System",
  },
  {
    title: "Spam Detection Model",
    category: "NLP • Classification",
    description: "Text classification system using TF-IDF, tokenization, and stopword removal. Implements Naive Bayes and Logistic Regression with high accuracy.",
    tech: ["NLTK", "Scikit-learn", "TF-IDF", "Python"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    github: "https://github.com/Akhya-Verma/spam-detection-",
  },
  {
    title: "Voice Command Shopping Assistant",
    category: "Speech Recognition • Accessibility",
    description: "Hands-free shopping interface with speech-to-text for product navigation and cart actions. Designed with accessibility in focus.",
    tech: ["Speech Recognition", "JavaScript", "Node.js", "REST API"],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop",
    github: "https://github.com/Akhya-Verma/Voice-Command-Shopping-Assistant",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of machine learning and web development projects showcasing 
            practical problem-solving and technical expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github size={16} />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

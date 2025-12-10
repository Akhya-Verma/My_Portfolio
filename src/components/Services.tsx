import { 
  Brain, 
  BarChart3, 
  Globe, 
  Plug, 
  Rocket, 
  Eye,
  Cog
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Model Development",
    description: "Classification, anomaly detection, emotion recognition, and real-time prediction systems using TensorFlow, Keras, and Scikit-learn.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description: "Data cleaning, preprocessing, exploratory data analysis (EDA), and actionable insights generation with compelling visualizations.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Responsive and dynamic web applications using React, Node.js, Express, and Flask with clean, intuitive interfaces.",
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description: "RESTful API design and development, third-party integrations including YouTube API, payment gateways, and more.",
  },
  {
    icon: Rocket,
    title: "End-to-End Deployment",
    description: "Full deployment of ML and web applications using Flask, Streamlit, and cloud platforms like AWS and Google Cloud.",
  },
  {
    icon: Eye,
    title: "Computer Vision Solutions",
    description: "Image processing and recognition systems using OpenCV, TensorFlow, and DeepFace for real-world applications.",
  },
  {
    icon: Cog,
    title: "Automation & Utility Tools",
    description: "Custom automation scripts, data processing pipelines, PDF utilities, and preprocessing tools for workflow optimization.",
  },
];

export const Services = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            What I Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            My <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions from concept to deployment, blending machine learning 
            expertise with modern development practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={28} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { GraduationCap, MapPin, Mail, Linkedin, Github } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Passionate About Building
              <span className="text-primary"> Smart Solutions</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
              <p>
                I'm an aspiring Software Developer with a deep passion for Machine Learning. 
                My work focuses on building intelligent systems that solve real-world problems 
                through the power of data and algorithms.
              </p>
              <p>
                From building emotion-detection systems to developing anomaly detection models, 
                I thrive on breaking down complex challenges into elegant, efficient solutions. 
                Strong problem-solving skills drive my approach to every project I undertake.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium text-foreground">B.Tech CSE (2026)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Kanpur, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="mailto:akhyaverma0110@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akhya-verma-6549072b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Akhya-Verma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

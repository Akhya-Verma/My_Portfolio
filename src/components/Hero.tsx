import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const floatingCaptions = [
  "ML Developer",
  "Web Developer",
  "Data Scientist",
  "Problem Solver",
];

export const Hero = () => {
  const resumeUrl = import.meta.env.VITE_RESUME_URL || "/resume.pdf";
  const isLocalResume = resumeUrl.startsWith("/");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-30">
          <svg viewBox="0 0 600 600" className="w-full h-full animate-float">
            <defs>
              <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "hsl(68, 100%, 50%)" }} />
                <stop
                  offset="100%"
                  style={{ stopColor: "hsl(80, 100%, 40%)" }}
                />
              </linearGradient>
            </defs>
            <path
              d="M300,50 C450,50 550,150 550,300 C550,450 450,550 300,550 C150,550 50,450 50,300 C50,150 150,50 300,50"
              fill="url(#limeGrad)"
              transform="rotate(45, 300, 300)"
            />
          </svg>
        </div>

        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">
                Available for work
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Akhya</span>
                <br />
                <span className="text-foreground">Verma</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Developing smart, user-focused solutions blending{" "}
                <span className="text-primary font-medium">
                  machine learning
                </span>
                , clean interfaces, and modern cloud technologies.
              </p>

              <p className="text-muted-foreground max-w-lg">
                I break down complex challenges and turn them into efficient,
                intuitive digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight size={18} />
                </a>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a
                  href="https://drive.google.com/file/d/1yDuTQ9aFn9vF4g25vpsl4M4X96ew29Co/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  Resume
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-12 pt-8">
              <div>
                <p className="text-3xl font-bold">6+</p>
                <p className="text-sm text-muted-foreground">Major Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div>
                <p className="text-3xl font-bold">2026</p>
                <p className="text-sm text-muted-foreground">B.Tech Graduate</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Rings */}
              <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
              <div className="absolute -inset-8 rounded-full border-2 border-primary/40" />
              <div className="absolute -inset-4 rounded-full border border-primary/60" />

              {/* Sphere */}
              <div
                className="relative w-[300px] h-[300px] rounded-full overflow-hidden cursor-pointer"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.2) 50%, hsl(var(--primary) / 0.1))",
                  boxShadow:
                    "inset -20px -20px 60px rgba(0,0,0,0.5), inset 20px 20px 60px hsl(var(--primary) / 0.2), 0 0 100px hsl(var(--primary) / 0.4)",
                }}
              >
                <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/50">
                  <img
                    src={profilePhoto}
                    alt="Akhya Verma"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating captions – hover staggered */}
              <div className="absolute -left-24 top-1/4 glass px-4 py-2 rounded-full opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                {floatingCaptions[0]}
              </div>

              <div className="absolute -right-24 top-1/3 glass px-4 py-2 rounded-full opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-300">
                {floatingCaptions[1]}
              </div>

              <div className="absolute -left-20 bottom-1/4 glass px-4 py-2 rounded-full opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-500">
                {floatingCaptions[2]}
              </div>

              <div className="absolute -right-20 bottom-1/3 glass px-4 py-2 rounded-full opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-700">
                {floatingCaptions[3]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

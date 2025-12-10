import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
    url: "https://github.com/Akhya-Verma",
    username: "Akhya-Verma",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    name: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
    url: "https://www.linkedin.com/in/akhya-verma-6549072b0/",
    username: "akhya-verma",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "LeetCode",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg",
    url: "https://leetcode.com/u/akhya_verma/",
    username: "akhya_verma",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    name: "HackerRank",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackerrank.svg",
    url: "https://www.hackerrank.com/profile/CS_2201640100041",
    username: "CS_2201640100041",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    name: "Salesforce",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg",
    url: "https://www.salesforce.com/trailblazer/mnl0138f04q4akwaxu",
    username: "trailblazer",
    color: "from-sky-500/20 to-sky-600/10",
  },
  {
    name: "Twitter",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
    url: "https://x.com/akhya0110",
    username: "akhya0110",
    color: "from-slate-500/20 to-slate-600/10",
  },
];

export const Profiles = () => {
  return (
    <section id="profiles" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            Coding Profiles
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            My <span className="text-primary">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with me on various coding platforms and check out my problem-solving journey.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <img 
                  src={profile.icon} 
                  alt={profile.name}
                  className="w-8 h-8 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {profile.name}
              </h3>
              <p className="relative text-sm text-muted-foreground mb-3">
                @{profile.username}
              </p>
              
              {/* Link indicator */}
              <div className="relative flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Profile</span>
                <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

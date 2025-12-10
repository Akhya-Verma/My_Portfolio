import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name, // ✅ must match {{name}}
          email: formData.email, // ✅ must match {{email}}
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Let's <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">
                    akhyaverma0110@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">
                    Kanpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="hidden lg:block relative h-40">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl" />
              <div className="absolute top-1/2 left-8 -translate-y-1/2">
                <p className="text-2xl font-bold text-foreground">
                  Ready to build
                </p>
                <p className="text-2xl font-bold text-primary">
                  something amazing?
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-emerald-500">
                  ✅ Your message has been sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500">
                  ❌ Something went wrong. Please try again later.
                </p>
              )}

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Linkedin, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-10 justify-items-center">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:divyamkhorwal18@gmail.com"
                    className="text-muted-foreground visited:text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors"
                  >
                    divyamkhorwal18@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Location</h4>
                  <span className="text-muted-foreground">New Delhi, India</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-3 justify-center text-center">
                <h4 className="font-medium">Connect with me:</h4>
                <a href="https://www.linkedin.com/in/divyam-khorwal-847215224/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

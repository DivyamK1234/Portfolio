import { ArrowDown } from "lucide-react";
import profilePic from "@/assets/profile_picture.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Profile Photo */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start opacity-0 animate-fade-in">
            <img
              src={profilePic}
              alt="Divyam Khorwal profile"
              className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full object-cover ring-2 ring-primary/50 shadow-lg"
              loading="eager"
            />
          </div>

          {/* Right: Headline and CTA */}
          <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Divyam
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Khorwal
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl md:max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              AI Engineer - I design and develop AI-driven solutions that address real-world challenges. By leveraging modern AI frameworks and automation, I build systems that are intelligent, scalable, and impactful.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

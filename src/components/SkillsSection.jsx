import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming & Development
  { name: "Python", level: 95, category: "programming & development" },
  { name: "Java", level: 85, category: "programming & development" },
  { name: "C++", level: 80, category: "programming & development" },

  // AI
  { name: "Large Language Models (LLMs)", level: 90, category: "ai" },
  { name: "RAG", level: 90, category: "ai" },
  { name: "LangChain", level: 85, category: "ai" },
  { name: "LangGraph", level: 80, category: "ai" },
  { name: "Generative AI (OpenAI, Meta LLaMA)", level: 85, category: "ai" },
  { name: "Vector Databases (Chroma)", level: 80, category: "ai" },
  { name: "Conversational AI", level: 90, category: "ai" },
  { name: "AI Agents", level: 85, category: "ai" },

  // Cloud & DevOps
  { name: "AWS", level: 75, category: "cloud & devops" },
  { name: "Docker", level: 80, category: "cloud & devops" },
  { name: "Vercel", level: 85, category: "cloud & devops" },
  { name: "Git/GitHub", level: 90, category: "cloud & devops" },
  { name: "CI/CD", level: 80, category: "cloud & devops" },

  // Tools & Frameworks
  { name: "Streamlit", level: 85, category: "tools & frameworks" },
  { name: "Twilio", level: 70, category: "tools & frameworks" },
  { name: "ActiveMQ", level: 70, category: "tools & frameworks" },
  { name: "FastAPI (REST APIs)", level: 85, category: "tools & frameworks" },
  { name: "WebSockets", level: 80, category: "tools & frameworks" },
];

const categories = [
  "all",
  "programming & development",
  "ai",
  "cloud & devops",
  "tools & frameworks",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

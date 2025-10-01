import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Comparative Content Analysis Dashboard",
    description:
      "AI-powered, multilingual dashboard analyzing consulting trends and content strategies using NLP, clustering, and interactive visualizations.",
    image: "/projects/dashboard.png",
    tags: ["Python", "Streamlit", "NLP", "Clustering"],
    demoUrl: "https://dashboard-007.streamlit.app/",
    githubUrl: "https://github.com/DivyamK1234/Analytics_Dashboard",
  },
  {
    id: 2,
    title: "Mathematics AI Tutor",
    description:
      "Grade 12 Math tutor using RAG, PDF retrieval, and Gemini to deliver accurate, context-aware solutions in Streamlit.",
    image: "/projects/tutor.png",
    tags: ["RAG", "Gemini", "PDF Retrieval", "Streamlit"],
    demoUrl: "https://rag-maths-aitutor.streamlit.app/",
    githubUrl: "https://github.com/DivyamK1234/Mathematics_AI_Tutor",
  },
  {
    id: 3,
    title: "Stick Hero Game",
    description:
      "Java-based replica of 'Stick Hero' with OOP design, stick mechanics, animations, and sound effects.",
    image: "/projects/stick.png",
    tags: ["Java", "OOP", "Game Dev", "Design Thinking"],
    demoUrl: "#",
    githubUrl: "https://github.com/DivyamK1234/Stick_Hero_Java_Game",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 text-center">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex justify-start items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/DivyamK1234"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpg";

export const HackathonsSection = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <section id="hackathons" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Hackathon <span className="text-primary"> Highlights</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A quick glimpse of moments from hackathons and wins.
        </p>

        {/* Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg gradient-border card-hover">
              <img
                src={src}
                alt={`Hackathon ${idx + 1}`}
                className="w-full h-44 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                loading={idx < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        <div className="space-y-6 text-left max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold">HackFinance: Fintech Hackathon (Third Position)</h3>
            <p className="text-muted-foreground">
              Built a customer outreach solution to enhance financial access in underserved and remote areas, ensuring better engagement between financial institutions and their customers. (Feb, 2025)
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Technovation Hackathon (First Position)</h3>
            <p className="text-muted-foreground">
              Crafted a solution named as Loan[dot]ly that caters to automate and handle large chunks of manual verification processes done by banks at the time of providing services like loans, credit cards etc especially focusing on rural areas of the country in order to increase the speed and efficiency at which banks provide their services to people. (Jan, 2025)
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Gen-AI Hackathon (First Position)</h3>
            <p className="text-muted-foreground">
              Worked on an idea addressing the knowledge gap of remembering conversations between individuals, highlighting common issues faced in meetings such as forgetfulness, information overload, and difficulty in retrieving specific information. We believe our solution can greatly benefit not only normal individuals but also deaf people. (April, 2024)
            </p>
          </div>

          <div>
            <h3 className="font-semibold">HackAIthon (Best AI Hack Award)</h3>
            <p className="text-muted-foreground">
              My team and I took on a problem statement related to Sustainability - Utilizing AI in Electric Vehicles for a Sustainable Future and crafted a groundbreaking solution within 30 hours through Agile development, AI and Creative problem-solving. (Sep, 2023)
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Redbricks Hacks (Third Position)</h3>
            <p className="text-muted-foreground">
              I took part in the Redbrick Hacks Hackathon and dedicated my efforts to developing an innovative idea aimed at enhancing the adaptability of electric vehicles (EVs) while integrating a variety of practices to facilitate robust infrastructure development in India. I am thrilled to share that our hard work paid off, as we secured the esteemed third position in the competition. (Aug, 2023)
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Green India Hackathon - North Region (Second Position)</h3>
            <p className="text-muted-foreground">
              We worked on an idea in the Electric Vehicles Space and came up with a solution to the issues such as Fire Risk, Battery Drainage, Lack of access to nearby Charging Stations, and limited native language feedback. We made sure that our idea was inclusive and accessible to all, such that even E-rickshaws could utilize them well. (Feb, 2023)
            </p>
          </div>

          <div>
            <h3 className="font-semibold">DecodEV Hackathon (Third Position)</h3>
            <p className="text-muted-foreground">
              Our team developed a product "NeonEV" to control the high temperature in electric vehicles and have a constant watch on battery health and receive feedback for the same and would also help the users to find the nearest charging battery stations using AI. Our team secured third position. (Sep, 2022)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

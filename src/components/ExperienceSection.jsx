import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "ImagingIQ",
      location: "Gurugram, Haryana",
      period: "July 2025 – Present",
      responsibilities: [
        "Developing and maintaining Langraph pipelines for AI workflows.",
        "Writing and optimizing nodes for various hosted models to enable scalable and modular AI solutions.",
        "Contributing to data-driven analytics and AI model orchestration."
      ],
      stack: "Python, Langraph, FastAPI, AI/ML Pipelines, Data Analytics"
    },
    {
      title: "AI Intern",
      company: "Yolearn.ai",
      location: "Remote",
      period: "May 2025 – June 2025",
      responsibilities: [
        "Built and deployed LLM-powered AI agents for students and teachers.",
        "Integrated LangChain and vector databases (Qdrant, Pinecone) into AI workflows.",
        "Developed APIs and services using FastAPI for scalable AI solutions."
      ],
      stack: "Python, LangChain, RAG, FastAPI, Qdrant, Pinecone, LLMs"
    },
    {
      title: "UG Researcher",
      company: "Complex Systems Laboratory, IIITD",
      location: "New Delhi, India",
      period: "Jan 2024 – May 2024",
      guide: "Dr. Ganesh Bagler",
      guideUrl: "https://www.iiitd.ac.in/bagler",
      responsibilities: [
        "Fine-tuned open-source LLMs (GPT-2, LLaMA-2-7B) on large recipe datasets using QLoRA and Transformers.",
        "Generated novel recipes and evaluated outputs with BERT, BLEU, and METEOR metrics."
      ]
    },
    {
      title: "UG Researcher",
      company: "Human-Centred Design, IIITD",
      location: "New Delhi, India",
      period: "Aug 2023 – Dec 2023",
      guide: "Dr. Kalpana Shankhwar",
      guideUrl: "https://www.iiitd.ac.in/kalpana",
      responsibilities: [
        "Developed a VR and 3D modelling platform to enhance medical education.",
        "Combined immersive technology with medical learning to improve student engagement and retention."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
                  {/* Job Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  
                  {/* Company and Location */}
                  <p className="text-lg text-foreground mb-1">
                    {exp.company} | {exp.location}
                  </p>
                  
                  {/* Period and Guide */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-500 italic">
                      {exp.period}
                    </span>
                    {exp.guide && (
                      <>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-500">Guide: </span>
                        {exp.guideUrl ? (
                          <a
                            href={exp.guideUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary/80"
                          >
                            {exp.guide}
                          </a>
                        ) : (
                          <span className="text-primary underline cursor-default">
                            {exp.guide}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  
                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-foreground pl-4 relative">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-foreground rounded-full"></span>
                        <span dangerouslySetInnerHTML={{ 
                          __html: responsibility.replace(/\b(Langraph|LangChain|FastAPI|Qdrant|Pinecone|GPT-2|LLaMA-2-7B|QLoRA|Transformers|BERT|BLEU|METEOR|VR|3D modelling|AI agents|LLMs|Python)\b/g, '<strong>$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                  
                  {/* Stack */}
                  {exp.stack && (
                    <p className="text-foreground">
                      <span className="font-medium">Stack: </span>
                      {exp.stack}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

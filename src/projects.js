import React from 'react';
import './index.css';
import { Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {[
              {
                title: "ShortNExact",
                description: "Designed and built AI-powered pipeline to generate structured questionnaires from YouTube videos using \
                OpenAI-Whisper and Qwen 2.5.",
                image: "",
                tech: ["Python", "OpenAI-Whisper", "Qwen 2.5", "yt-dlp"],
                github: "https://github.com/AdiistheGoat/ShortNExact"
              },

              {
                title: "Myshrooms",
                description: "Designed and built AI-powered pipeline to generate structured questionnaires from YouTube videos using \
                OpenAI-Whisper and Qwen 2.5.",
                image: "",
                tech: ["Python", "OpenAI-Whisper", "Qwen 2.5", "yt-dlp"],
                github: "https://github.com/AdiistheGoat/ShortNExact"
              },


              {
                title: "LLM finetuning using LORA",
                description: "Designed and built AI-powered pipeline to generate structured questionnaires from YouTube videos using \
                OpenAI-Whisper and Qwen 2.5.",
                image: "",
                tech: ["Python", "OpenAI-Whisper", "Qwen 2.5", "yt-dlp"],
                github: "https://github.com/AdiistheGoat/ShortNExact"
              },

              {
                title: "Spark-based Loans Application Analysis",
                description: "Built and deployed a web app on GCP that computes shortest paths and \
                nearest points (campus buildings) using Dijkstra's algorithm, with a responsive UI and robust JUnit5 testing",
                image: "",
                tech: ["Java", "GCP", "JUnit", "HTML/CSS"],
                github: ""
              }

            ].map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;

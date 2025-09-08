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
                description: "Designed and built a production-grade agentic AI web application that trims or expands your text to hit the exact word count while preserving meaning, tone, and grammar.\
                The application is deployed on GCP and is complete with load balancing, api rate limiting, and api key authentication.",
                image: "",
                tech: ["Python", "FastAPI", "Gradio","Docker", "Postman","Redis","HAProxy","PostgreSQL","GCP"],
                github: "https://github.com/AdiistheGoat/ShortNExact"
              },

              {
                title: "Myshrooms",
                description: "Developed a poisonous mushroom classification app using React Native and Flask, hosted on Expo.",
                image: "",
                tech: ["Python","React-Native", "scikit-learn", "OpenCV", "Pandas"],
                github: "https://github.com/AdiistheGoat/Myshrooms"
              },

              {
                title: "LLM finetuning using LORA",
                description: "Fine-tuned FLAN-T5 Large using LoRA—adding trainable low-rank adapters to replace linear layers while freezing the base model and training only the LoRA parameters.\
                The workflow demonstrates efficient fine-tuning with attention masks and padding to handle variable-length text data.",
                image: "",
                tech: ["Python", "Pytorch", "Pandas", "Jupyter"],
                github: "https://github.com/AdiistheGoat/fine_tuning_using_LORA"
              },

              {
                title: "Spark-based Loans Application Analysis",
                description: "Built a scalable Apache Spark + Hive pipeline for 100K+ financial records, optimized with bucketing, partitioning, and in-memory caching, \
                and deployed on a Dockerized distributed cluster. ",
                image: "",
                tech: ["Python", "Docker", "ApacheSpark", "HTML/CSS"],
                github: ""
              },

              {
                title: "Network Path Finder",
                description: "Designed and deployed a full-stack web application on a GCP virtual machine, \
                allowing users to find the shortest path between two points and determine the closest points from a specified location using Dijkstra’s algorithm.",
                image: "",
                tech: ["Java", "HTML", "CSS", "Junit5", "GCP"],
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

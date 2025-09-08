import React from 'react';
import './index.css';

const Experiences = () => {
return (
    <section id="experience" className="section">
        <div className="container">
            <h2 className="section-title">Experiences</h2>
            <div>
                {[
                    {
                        title: "MLE Intern",
                        company: "Freecharge",
                        period: "May 2025 - August 2025",
                        description: [
                            " Engineered an agentic AI application for financial analytics that lets users query about their credit card transactions and receive both textual and graphical insights.\
                              Built an ai agent backend using LangGraph and AWS Bedrock endpoints to orchestrate prompt interpretation, entity extraction, SQL generation, and RAG-based memory, achieving over 40% improvement in the analysis given to the user.\
                              Collaborated closely with business stakeholders to gather requirements and align the AI system with user-facing needs.\
                              Developed a financial search engine over 12,000+ web pages using AWS Kendra. Designed a scraping and preprocessing pipeline to extract high-signal fields (titles, headers, content blocks) from noisy webpages, leading to a 30% boost in semantic match accuracy (offline benchmarking).\
                              Leveraged batch API calls to decrease latency during ingestion and updating of 12,000+ financial webpages into AWS Kendra by 20%. Partnered with product and business teams to ensure relevance and coverage of critical financial content.\
                              Developed a YOLOv8-based video analytics pipeline to detect and track people in CCTV footage, enabling automated monitoring of movement and occupancy. Implemented trajectory validation and line-crossing algorithms to accurately count unique individuals entering or exiting defined zones, reducing false detections.\
                              Integrated the system with OpenCV and OpenAI APIs for natural-language reporting of analytics, improving interpretability for non-technical stakeholders."
                        ]
                    },
                    {
                        title: "Software Engineering Intern",
                        company: "Prof Gary Shuis Lab",
                        period: "November 2024 - February 2025",
                        description: [

                            " Implemented a Python script to visualize the flow of activation values across layers of an MLP trained on\
                            mathematical functions. The script includes model training, hyperparameter tuning, error evaluation, and\
                            PCA-based analysis of hidden layer activations. \
                            Developed an additional script to automate and batch-process multiple runs with randomly generated functions, enabling comprehensive experimentation\
                            Extended the project with dynamic layer architecture, enabling users to define the number of layers and\
                            neurons for customized network configurations. Integrated features to save the best model and activation plots for deeper analysis. \
                            Improved running time by 25% by Optimizing error computations using vectorized operations\
                            Collaborated with PhD students and researchers in weekly meetings to gather feedback and align development with research objectives, translating complex requirements into scalable code modules.\
                            "
                        ]
                    },
                    {
                        title: "Undergraduate Teaching Assistant",
                        company: "University of Wisconsin-Madison Department Of Computer Sciences",
                        period: "September 2024 - Present",
                        description: [
                            "Supporting a class of 100+ students every week in CS 300 (OOProgramming II, Java) and CS540 (Intro to AI) at UW-Madison on debugging project assignments and course content\
                            Helping improve student understanding of core programming concepts (OOP, data structures, algorithms) and Collaborating with 15+ teaching staff to enhance student understanding on supervised, unsupervised, and reinforcement learning algorithms and concepts like gradient descent, backpropogation, and bias-variance tradeoff.\
                            Received 30+ multiple positive reviews from both students and teaching staff for exceptional engagement and perfect attendance.\
                            Identified gaps in office hours and proposed improvements (e.g., Slack channel,improvements in review sessions) which were successfully adopted to enhance student–mentor collaboration."
                        ]
                    },
                    {
                        title: "Computer Vision Developer",
                        company: "Wisconsin Autonomous",
                        period: "January 2024 - May 2024",
                        description: [
                            "Co-led a team of five to develop an algorithm for detecting stop lines, utilizing a traditional OpenCV-based approach, using techniques like canny edge detection and Hough Transform. Finetuned Yolov8 for deer detection using Ultralytics and Roboflow.\
                            Tackled various challenges, such as capturing feed of stop lines in different lighting conditions and capturing feed of faint stop lines to best emulate conditions of the MCity race track. \
                            The code was finally used in the perception stack by the team in SAE’s AutoDrive Challenge 2024, in which we subsequently achieved 2nd place in the Construction Challenge and 3rd place in the Mobility Innovation Series"
                            ]
                    }
                ].map((job, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-number">
                            {index + 1}
                        </div>
                        <div className="experience-content">
                            <h3 className="experience-title">{job.title}</h3>
                            <p className="experience-company">{job.company} • {job.period}</p>
                            {Array.isArray(job.description)
                                ? job.description.map((desc, i) => (
                                        <p className="experience-description" key={i} style={{ marginBottom: '1em' }}>
                                            {desc}
                                        </p>
                                    ))
                                : <p className="experience-description">{job.description}</p>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
};

export default Experiences;

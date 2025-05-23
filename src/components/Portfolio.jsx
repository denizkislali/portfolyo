import React from "react";
import "./Portfolio.css";
import FadeInSection from "./FadeInSection";

const Portfolio = () => {
  const projects = [
    {
      title: "Kişisel Blog",
      description:
        "React ve Firebase kullanılarak geliştirilmiş tam işlevli kişisel blog sitesi. Markdown desteği, yorum sistemi ve admin paneli içerir.",
      tags: ["React", "Firebase", "CSS3", "Markdown"],
      demoLink: "https://blog-demo.com",
    },
    {
      title: "Mini ATM",
      description:
        "C# ile geliştirilen, kullanıcı girişi, para çekme, para yatırma, bakiye sorgulama ve çıkış işlemlerini içeren bir mini ATM uygulaması.",
      tags: ["C#"],
      demoLink: "https://github.com/denizkislali/mini-atm",
    },
    {
      title: "Space Invaders Klonu",
      description:
        "Python ve Pygame kullanılarak geliştirilen, Space Invaders oyununun klonu.",
      tags: ["Python", "Pygame"],
      demoLink: "https://github.com/InciNurKurnaz/Space_Invaders",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <FadeInSection>
        <h2>Portfolyo</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-eye"></i> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Portfolio;

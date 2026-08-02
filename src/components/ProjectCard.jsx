import { useState } from "react";

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.image && !imageFailed;
  const initials = project.client
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="project-card">
      <span className="project-badge">{project.category}</span>

      <div className="project-image">
        {showImage ? (
          <img
            src={project.image}
            alt={`${project.client} campaign visual`}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="project-initials">{initials}</span>
        )}
      </div>

      <p className="project-client">{project.client}</p>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </article>
  );
}

export default ProjectCard;

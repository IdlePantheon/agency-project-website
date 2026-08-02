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
    <article className="group relative border border-line bg-white p-5 transition-shadow hover:shadow-[6px_6px_0_0_var(--color-ink)]">
      <span className="absolute -top-3 right-4 bg-mustard px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink">
        {project.category}
      </span>

      <div className="mb-4 flex h-32 w-full items-center justify-center border border-line bg-paper">
        {showImage ? (
          <img
            src={project.image}
            alt={`${project.client} campaign visual`}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-display text-3xl font-bold text-slate">
            {initials}
          </span>
        )}
      </div>

      <p className="font-mono text-[11px] uppercase tracking-wider text-slate">
        {project.client}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/80">
        {project.description}
      </p>
    </article>
  );
}

export default ProjectCard;

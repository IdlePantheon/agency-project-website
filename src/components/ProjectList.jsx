import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <p className="border border-dashed border-line bg-white p-8 text-center font-mono text-sm text-slate">
        No projects match that search. Try a different client or category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;

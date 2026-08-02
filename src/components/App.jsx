import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import defaultProjects from "./data/defaultProjects";

function App() {
  const [projects, setProjects] = useState(defaultProjects);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return projects;

    return projects.filter((project) =>
      [project.client, project.title, project.category]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [projects, searchTerm]);

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />

      <main>
        <section
          id="home"
          className="mx-auto flex max-w-6xl flex-col justify-center px-6 py-24 sm:py-32"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-cobalt">
            Nairobi &mdash; Creative Agency
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            We build brands people remember, not just recognize.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
            Nyota &amp; Co. partners with corporate and consumer brands across
            East Africa on advertising, digital product design, and marketing
            campaigns that hold their own in a crowded feed.
          </p>
        </section>

        <section id="projects" className="border-t border-line bg-white/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-wider text-slate">
              Selected Work
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              Projects
            </h2>

            <div className="mt-10 max-w-2xl">
              <AddProjectForm onAddProject={handleAddProject} />
            </div>

            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ProjectList projects={filteredProjects} />
          </div>
        </section>

        <section id="about" className="border-t border-line px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-wider text-slate">
              Who We Are
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              About Nyota &amp; Co.
            </h2>
            <p className="mt-6 leading-relaxed text-ink/80">
              We help brands get noticed, stay in people's memory, and stand
              out from everyone else chasing the same attention. Founded in
              Nairobi, our team works across advertising, product design, and
              marketing to turn ordinary campaigns into ones people talk
              about &mdash; from billboard to mobile app.
            </p>
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-white/40 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-wider text-slate">
              Get In Touch
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              Contact
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/80">
              Have a brand that needs to be seen? Reach us at{" "}
              <a href="mailto:hello@nyotaco.agency" className="text-cobalt underline">
                hello@nyotaco.agency
              </a>{" "}
              and we'll get back to you within two working days.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

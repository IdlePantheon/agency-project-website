import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Footer from './components/Footer'
import AddProjectForm from './components/AddProjectForm'
import ProjectCard from './components/ProjectCard'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
import defaultProjects from "./data/defaultProjects";
import "./App.css";

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
    <div className="page">
      <Navbar />

      <main>
        <section id="home" className="hero">
          <p className="hero-eyebrow">Nairobi &mdash; Creative Agency</p>
          <h1 className="hero-title">
            We build brands people remember, not just recognize.
          </h1>
          <p className="hero-text">
            Nyota &amp; Co. partners with corporate and consumer brands across
            East Africa on advertising, digital product design, and marketing
            campaigns that hold their own in a crowded feed.
          </p>
        </section>

        <section id="projects" className="section section-alt">
          <div className="section-inner">
            <p className="section-eyebrow">Selected Work</p>
            <h2 className="section-title">Projects</h2>

            <AddProjectForm onAddProject={handleAddProject} />
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ProjectList projects={filteredProjects} />
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-inner-narrow">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-title">About Nyota &amp; Co.</h2>
            <p className="section-text">
              We help brands get noticed, stay in people's memory, and stand
              out from everyone else chasing the same attention. Founded in
              Nairobi, our team works across advertising, product design, and
              marketing to turn ordinary campaigns into ones people talk
              about &mdash; from billboard to mobile app.
            </p>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="section-inner-narrow">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-title">Contact</h2>
            <p className="section-text">
              Have a brand that needs to be seen? Reach us at{" "}
              <a href="mailto:hello@nyotaco.agency" className="section-link">
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


const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Nyota&nbsp;&amp;&nbsp;Co.
        </a>
        <ul className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-slate">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="block rounded-full px-4 py-2 transition-colors hover:bg-ink hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

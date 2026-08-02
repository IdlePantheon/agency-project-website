function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 py-10 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-display text-base font-semibold">Nyota &amp; Co.</p>
        <p className="font-mono text-xs uppercase tracking-wider text-paper/60">
          &copy; {new Date().getFullYear()} Nyota &amp; Co. Creative Agency, Nairobi
        </p>
      </div>
    </footer>
  );
}

export default Footer;

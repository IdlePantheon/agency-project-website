function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Nyota &amp; Co.</p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Nyota &amp; Co. Creative Agency, Nairobi
        </p>
      </div>
    </footer>
  );
}

export default Footer;

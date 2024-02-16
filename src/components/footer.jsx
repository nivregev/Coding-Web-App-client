const Footer = () => {
  return (
    <footer>
      <p className="border-top pt-3 py-2 text-center">
        <span>
          Coding <i className="bi bi-geo-fill"> </i>App
        </span>
        <span className="mx-2">&copy;</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;

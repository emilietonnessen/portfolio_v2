const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        {currentYear} &copy; Emilie Tønnessen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

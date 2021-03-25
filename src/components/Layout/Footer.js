const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__text">{currentYear} &copy; Emilie Tonnessen. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
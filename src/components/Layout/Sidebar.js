import logo from '../../assets/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="brand">
                <a href="#landingpage" className="brand__link">
                    <img src={logo} alt="Logo " className="brand__logo"/>
                </a>
            </div>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item nav__item--active">
                        <a href="#portfolio" className="nav__link"><i class="fas fa-palette"></i> Portfolio</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link"><i class="fas fa-user"></i> about</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link"><i class="fas fa-envelope"></i> contact</a>
                    </li>
                </ul>
            </nav>

            <div className="media-links">
                <a href="https://github.com/Emizzari" className="media-links__link" target="_blank" rel="noreferrer">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/emilie-henriette-t%C3%B8nnessen-19a850191/" className="media-links__link" target="_blank" rel="noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}

export default Sidebar

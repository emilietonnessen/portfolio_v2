
const Menu = () => {


    /* const queryString = document.location.href;

    let portfolio = null;
    let about = null;
    let contact = null;

    const active = 'menu__item--active';
    
    if (queryString.match('#portfolio')) {
        portfolio = active;
    } if (queryString.match('#about')) {
        about = active;
    } if (queryString.match('#contact')) {
        contact = active;
    } */
    
    

   /*  const onScroll = () => {
        const removeActiveClass = elements => {
            for (let i = 0; i < elements.length; ++i) {
                elements[i].classList.remove('menu__link--active');
            }
        }

        const anchors = document.querySelectorAll('.menu__link');
        let previousRefElement = null;

        for (let i = 0; i < anchors.length; ++i) {
            let currentRefElement = document.getElementById(anchors[i].getAttribute('href').substring(1));
            let currentRefElementTop = currentRefElement.getBoundingClientRect().top;

            if (currentRefElementTop <= 1) {

                previousRefElement = anchors[i];

                if (i === anchors.length - 1) {
                    removeActiveClass(anchors);
                    anchors[i].classList.add("menu__link--active");
                }

            } else {
                removeActiveClass(anchors);
                previousRefElement.classList.add("menu__link--active");
                break;
            }  
        }
    }

    window.onscroll = onScroll; */



    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#portfolio" className="menu__link">
                        <i className="fas fa-palette"></i> 
                        Portfolio
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#about" className="menu__link">
                        <i className="fas fa-user"></i> 
                        about
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#contact" className="menu__link">
                        <i className="fas fa-envelope"></i> 
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
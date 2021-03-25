import Projects from '../components/project/Projects'
import Search from '../components/Search'


const Portfolio = () => {


    return (
        <div className="portfolio" id="portfolio">
            <h2 className="headline headline--primary">
                Portfolio
                <span></span>
            </h2>
            
            <Search />

            <Projects />

        </div>
    );
}

export default Portfolio;
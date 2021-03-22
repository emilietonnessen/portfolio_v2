import Project from '../components/project/Project'
import ProjectTall from '../components/project/ProjectTall'
import ProjectWide from '../components/project/ProjectWide'
import Search from '../components/Search'
import risorklatreklubb from '../assets/risorklatreklubb.png';
import varus from '../assets/varus.jpg';
import natours from '../assets/natours.png';
import csm from '../assets/csm.png';
import recycle from '../assets/recycle.jpg';
import spacex from '../assets/spacex.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h2 className="headline headline--primary">
                Portfolio
                <span></span>
            </h2>
            
            <Search />

            <div className="projects">
                
                <Project 
                    image={risorklatreklubb}
                    title="Risør Klatreklubb"
                    id="1" />
                 
                
                <Project 
                    image={varus}
                    title="Varus Cosmetics"
                    id="2" />
                
                <ProjectTall
                    image={spacex}
                    title="Space X"
                    id="3" />
                
                <ProjectTall
                    image={csm}
                    title="CMS"
                    id="4" />
                

                <Project 
                    image={natours}
                    title="Natours"
                    id="5" />

                <ProjectWide
                    image={recycle}
                    title="Re-Cycle"
                    id="6" />
                
            </div>

        </div>
    )
}

export default Portfolio

import { useContext } from 'react';
import { Element } from 'react-scroll';

import ProjectCard from '../components/Project/ProjectCard';
import ProjectsContext from '../context/ProjectsContext';
import { Project } from '../constants/interfaces';



const Portfolio: React.FC = () => {

    // Call context
    const [projects, ] = useContext(ProjectsContext);

    // Variables
    let projectCard;

    if (projects) {
        projectCard = projects.map((project: Project) => (
            <ProjectCard 
                key={project.id}
                data={project}
                image={project.thumbnail}
                title={project.name} />
        ));
    }

    return (
        <Element name="portfolio" className="portfolio" id="portfolio">
            <h2 className="headline headline--primary">
                Portfolio
                <span></span>
            </h2>
  
            <div className="projects">
                {projectCard ? projectCard : "loading..."}
            </div>

        </Element>
    );   
}

export default Portfolio;
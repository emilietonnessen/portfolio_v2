import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import ProjectCard from '../components/Project/ProjectCard';
import { selectProjects } from '../store/features/projectSlice';
import { IProjects } from '../interfaces/IProjects';

const Portfolio: React.FC = () => {
  const projects = useSelector(selectProjects);

  return (
    <Element name="portfolio" className="portfolio" id="portfolio">
      <h2 className="headline headline--primary">
        Portfolio
        <span></span>
      </h2>

      <div className="projects">
        {projects
          ?.map((project: IProjects) => (
            <ProjectCard key={project.id} data={project} />
          ))
          .reverse()}
      </div>
    </Element>
  );
};

export default Portfolio;

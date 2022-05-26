import ProjectCard from 'features/Projects/ProjectCard';
import projects from 'features/Projects/projects.util';
import { Element } from 'react-scroll';

const PortfolioPage: React.FC = () => {
  // Call context

  // Variables
  let projectCard;

  if (projects) {
    projectCard = projects?.map((project: any) => (
      <ProjectCard
        key={project.id}
        data={project}
        image={project.thumbnail}
        title={project.name}
      />
    ));
  }

  return (
    <Element name="portfolio" className="portfolio" id="portfolio">
      <h2 className="headline headline--primary">
        Portfolio
        <span></span>
      </h2>

      <div className="projects">{projectCard ? projectCard : 'loading...'}</div>
    </Element>
  );
};

export default PortfolioPage;

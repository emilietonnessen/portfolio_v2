import { RefObject } from 'react';
import { ActiveSection } from 'App';
import projectsArray from 'features/Projects/projectsArray';
import { Link } from 'react-router-dom';

const Projects = ({ scrollRef }: { scrollRef: RefObject<HTMLElement> }) => {
  return (
    <section
      ref={scrollRef}
      className="section section--dark-background section--no-padding"
      id={ActiveSection.Portfolio}
    >
      <div className="projects__content">
        <h2 className="h2">Projects</h2>
      </div>

      <ul className="projects__list hide-horizontal-scrollbar">
        {projectsArray?.map((project) => (
          <li key={project.slug} className="projects__list-item">
            <Link
              to={`/project/${project.slug}`}
              className="projects__link"
              state={{ data: project }}
            >
              <img
                className="projects__image"
                alt={project.name}
                src={project.thumbnail}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

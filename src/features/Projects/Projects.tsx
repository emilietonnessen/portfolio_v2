import { RefObject } from 'react';
import { ActiveSection } from 'App';
import projectsArray from 'features/Projects/projectsArray';

const Projects = ({ scrollRef }: { scrollRef: RefObject<HTMLElement> }) => {
  return (
    <section
      ref={scrollRef}
      className="section section--dark-background"
      id={ActiveSection.Portfolio}
    >
      <div className="projects__content">
        <h2 className="h2">Projects</h2>
        <div>search</div>
        <div>filter chips</div>
      </div>

      <ul className="projects__list">
        {projectsArray?.map((project) => {
          return (
            <li className="projects__list-item">
              <a href="/" className="projects__link">
                <img
                  className="projects__image"
                  alt={project.name}
                  src={project.thumbnail}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;

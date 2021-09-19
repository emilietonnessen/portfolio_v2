import ReactFocusLock from 'react-focus-lock';
import { useDispatch } from 'react-redux';
import { white } from 'utils/colors';
import { IProjects } from 'interfaces/IProjects';
import { setFocus } from 'store/features/projectSlice';
import Button from 'components/UI/Button';
import { ExternalLink, Github } from 'components/UI/Icons';

interface IProjectCard {
  data: IProjects;
}

const ProjectCard: React.FC<IProjectCard> = ({ data }) => {
  const dispatch = useDispatch();
  const {
    thumbnail,
    name,
    focus,
    id,
    languages,
    functionalities,
    school,
    description,
    link,
    github,
  } = data;

  return (
    <>
      <button
        aria-label={name}
        className={`project-card ${
          focus ? 'project-card__focused' : undefined
        }`}
        onClick={() => dispatch(setFocus(id))}
      >
        <img src={thumbnail} alt="test" className="project-card__image" />
        <h4 className="project-card__title">{name}</h4>
      </button>
      {focus && (
        <ReactFocusLock
          className={`selected-project__container ${
            focus && 'selected-project__focused'
          }`}
        >
          <div className="project">
            <div className="project-content">
              <h3 className="headline project-content__headline">{name}</h3>

              <div className="project-content__tags">
                {languages.map((lang: any) => (
                  <span key={lang.name} className="project-content__tag">
                    {lang.name}
                  </span>
                ))}
              </div>

              <p className="paragraph">{description}</p>

              <ul className="project-content__list">
                {functionalities.map((func: any) => (
                  <li key={func} className="project-content__item">
                    {func}
                  </li>
                ))}
              </ul>

              {school && (
                <div className="project-content__school">
                  <h4 className="project-content__course-title">
                    {school?.course}
                  </h4>
                  <li className="project-content__grade">
                    <span className="project-content__grade--bold">
                      Grade:{' '}
                    </span>
                    {school?.grade}
                  </li>
                  <p className="paragraph">{school?.brief}</p>
                </div>
              )}
            </div>

            <div className="project-graphic">
              <img
                src={thumbnail}
                alt={name}
                className="project-graphic__image"
              />
              <div className="project-graphic__buttons">
                <a
                  href={link}
                  className="btn btn--primary btn--md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink color={white} classes="btn__icon" />
                  Live Demo
                </a>
                <a
                  href={github}
                  className="btn btn--github btn--md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github color={white} classes="btn__icon" />
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <Button
                theme="primary"
                size="md"
                onClick={() => dispatch(setFocus(id))}
              >
                Close
              </Button>
            </div>
          </div>
        </ReactFocusLock>
      )}
    </>
  );
};

export default ProjectCard;

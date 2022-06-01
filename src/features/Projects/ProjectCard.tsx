interface ProjectProps {
  image: string;
  title: string;
  data: any;
}

const ProjectCard = ({ image, title, data }: ProjectProps) => {
  const changeSelectedProject = () => {
    window.location.href = '#project';
  };

  //console.log("[Selected Project]", selectedProject);

  return (
    <button className="project-card" onClick={changeSelectedProject}>
      <img src={image} alt="test" className="project-card__image" />
      <h4 className="project-card__title">{title}</h4>
    </button>
  );
};

export default ProjectCard;

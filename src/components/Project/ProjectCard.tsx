import { useContext } from "react";
import SelectedProjectsContext from "../../context/SelectedProjectContext";

interface ProjectProps {
    image: string;
    title: string;
    data: any;
}

const ProjectCard: React.FC<ProjectProps> = ({image, title, data}) => {
    const [, setSelectedProject] = useContext(SelectedProjectsContext);

    const changeSelectedProject = () => {
        setSelectedProject(data);
        window.location.href="#project"
    }

    //console.log("[Selected Project]", selectedProject);

    return (
        <button className="project-card" onClick={changeSelectedProject}>
            <img src={image} alt="test" className="project-card__image"/>
            <h4 className="project-card__title">{title}</h4>
        </button>
    );
}

export default ProjectCard;
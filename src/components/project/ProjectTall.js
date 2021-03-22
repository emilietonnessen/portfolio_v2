import Button from "../UI/Button"

const ProjectTall = ({image, title, id}) => {
    return (
        <div className={`project project-tall project--${id}`}>
            <img src={image} alt="Project Thumbnail" className="project__img"/>

            <div className="project__content">
                <h5 className="project__title">
                    {title}
                </h5>
                <div className="project__buttons">
                    <Button link="https://github.com/Emizzari/risor-klatreklubb">Github</Button>
                    <Button link="https://www.tonnessen.com/projects/risor-klatreklubb/">Live Demo</Button>
                </div>
                
            </div>
        </div>
    );
}

export default ProjectTall;
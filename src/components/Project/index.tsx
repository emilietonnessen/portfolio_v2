import { useContext } from "react";
import SelectedProjectsContext from "../../context/SelectedProjectContext";
import { ExternalLink, Github } from "../UI/Icons";
import Modal from "../UI/Modal";
import { white } from '../../constants/colors';


const Project: React.FC = () => {

    // State
    const [selectedProject, ] = useContext(SelectedProjectsContext);


    // Variables
    let programLanguages;
    let schoolProject;
    let functionalities;


    if (selectedProject) {
            
        // Programming Languages
        programLanguages = selectedProject.languages.map((lang: any) => (
            <span key={lang.name} className="project-content__tag" >{lang.name}</span>
        ));

        // Functionalities
        functionalities = selectedProject.functionalities.map((func: any) => (
            <li key={func} className="project-content__item">{func}</li>
        ));

        // School Project                
        if (selectedProject.school) {
            schoolProject = ( 
                <div className="project-content__school">
                    <h4 className="project-content__course-title">{selectedProject.school.course}</h4> 
                    <li className="project-content__grade">
                        
                        <span className="project-content__grade--bold">Grade: </span> 
                        {selectedProject.school.grade}
                    </li>
                    <p className="paragraph">{selectedProject.school.brief}</p> 
                </div>
            );
        }
    }

    
    return (
        <Modal link="#portfolio" id="project" classes="project-modal" >
            {selectedProject ? 
            
            <div className="project">

                <div className="project-content">

                    {/* Title: */}
                    <h3 className="headline project-content__headline">{selectedProject.name}</h3>

                    {/* Tags */}
                    {selectedProject ? <div className="project-content__tags">{programLanguages}</div>: null}
                    
                    {selectedProject ? <p className="paragraph">{selectedProject.description}</p> : null}

                    {/* Functionalities */}
                    {selectedProject ? <ul className="project-content__list">{functionalities}</ul> : null}
                    

                    {/* School Project */}
                    {selectedProject.school != null ? schoolProject : null}
                </div>


                <div className="project-graphic">
                    <img src={selectedProject.thumbnail} alt={selectedProject.name} className="project-graphic__image" />
                    <div className="project-graphic__buttons">
                        <a href={selectedProject.link} className="btn btn--primary btn--md" target="_blank" rel="noopener noreferrer">
                            <ExternalLink color={white} classes="btn__icon"/> 
                            Live Demo 
                        </a>
                        <a href={selectedProject.github} className="btn btn--github btn--md" target="_blank" rel="noopener noreferrer">
                            <Github color={white} classes="btn__icon"/>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            : null}
            
        </Modal>
    );
}

export default Project;
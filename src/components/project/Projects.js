import projects from '../../server/projects';
import Project from './Project';

const Projects = () => {
    return (
        <div className="projects">
            {projects.map(project => (
                <Project 
                    key={project.id}
                    image={project.thumbnail}
                    title={project.name}
                    github={project.github} />
            ))}
        </div>
    );
}

export default Projects;
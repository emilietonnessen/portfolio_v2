interface ProjectBodyProps {
    description: string;
}


const ProjectBody: React.FC<ProjectBodyProps> = ({description}) => {
    return (
        <div>
            {description}
        </div>
    )
}

export default ProjectBody;
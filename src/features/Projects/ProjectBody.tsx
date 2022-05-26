interface ProjectBodyProps {
  description: string;
}

const ProjectBody = ({ description }: ProjectBodyProps) => {
  return <div>{description}</div>;
};

export default ProjectBody;

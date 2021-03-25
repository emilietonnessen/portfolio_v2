const Course = ({title, certificate, progress, courseLink}) => {
    return (
        <a href={courseLink} target="_blank" rel="noopener noreferrer" className="course">
            <h5 className="course__title">{title}</h5>
            {certificate ? (
                <img src={certificate} alt={title} className="course__certificate"/>
            ) : (
                <div className="course__progress">{progress} completed</div>
            )}
        </a>
    );
}

export default Course;
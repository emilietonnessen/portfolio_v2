interface ICourse {
  title: string;
  certificate: string;
  courseLink: string;
}

const CourseCard: React.FC<ICourse> = ({ title, certificate, courseLink }) => {
  return (
    <a
      href={courseLink}
      target="_blank"
      rel="noopener noreferrer"
      className="course"
    >
      <h5 className="course__title">{title}</h5>
      <img src={certificate} alt={title} className="course__certificate" />
    </a>
  );
};

export default CourseCard;

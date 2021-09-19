import { useSelector } from 'react-redux';
import CourseCard from 'components/Courses/CourseCard';
import { selectCourses } from 'store/features/courseSlice';

const Courses = () => {
  const courses = useSelector(selectCourses);

  return (
    <section className="courses">
      <h4 className="headline headline--tertiary courses__headline">courses</h4>
      <div className="course__container">
        {courses.map((course) => {
          const { id, name, link, certificate } = course;
          return (
            <CourseCard
              key={id}
              title={name}
              courseLink={link}
              certificate={certificate}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Courses;

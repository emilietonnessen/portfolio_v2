import Course from './Course';
import coursesArray from '../../server/courses';

const Courses = () => {
    //console.log(coursesArray)

    return (
        <section className="courses">

            {/* Section Headline: */}
            <h4 className="headline headline--tertiary courses__headline">courses</h4>

            {/* Looping through the Courses Array and displaying relevant information */}
            <div className="course__container">
                {coursesArray.map(course => (
                    <Course 
                        key={course.id}
                        title={course.name}
                        courseLink={course.link}
                        certificate={course.certificate}
                        progress={course.progress} />
                ))}
            </div>
            
        </section>
    );
}

export default Courses;
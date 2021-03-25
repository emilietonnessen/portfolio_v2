import Courses from '../../components/Courses/Courses';
import Education from './Educations';
import WorkExperience from './WorkExperiences';
import Tools from './Tools';
import Frontend from './Frontend';
import Backend from './Backend';

const Development = () => {
    return (
        <div className="development">

            <h3 className="headline headline--secondary development__headline">my development life</h3>
                
            <Education />
            <WorkExperience />
            <Tools />
            <Frontend />
            <Backend />
            <Courses />
        </div>
    );
}

export default Development;
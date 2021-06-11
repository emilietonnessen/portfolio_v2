import Courses from '../Courses/Courses';
import Tools from './Tools';
import Frontend from './Frontend';
import Backend from './Backend';

const Development = () => {
    return (
        <div className="development">

            <h3 className="headline headline--secondary development__headline u-margin-bottom-md">my development life</h3>
        
            <Tools />
            <Frontend />
            <Backend />
            <Courses />
        </div>
    );
}

export default Development;
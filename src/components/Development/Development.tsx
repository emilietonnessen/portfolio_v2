import Courses from 'components/Courses/Courses';
import Tools from 'components/Development/Tools';
import Frontend from 'components/Development/Frontend';
import Backend from 'components/Development/Backend';

const Development = () => {
  return (
    <div className="development">
      <h3 className="headline headline--secondary development__headline u-margin-bottom-md">
        my development life
      </h3>

      <Frontend />
      <Backend />
      <Tools />
      <Courses />
    </div>
  );
};

export default Development;

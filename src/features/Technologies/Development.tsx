import Courses from 'features/Courses/Courses';
import Frontend from 'features/Technologies/Frontend';
import Tools from 'features/Technologies/Tools';

const Development = () => {
  return (
    <div className="development">
      <h3 className="headline headline--secondary development__headline u-margin-bottom-md">
        my development life
      </h3>
      <Tools />
      <Frontend />
      <Courses />
    </div>
  );
};

export default Development;

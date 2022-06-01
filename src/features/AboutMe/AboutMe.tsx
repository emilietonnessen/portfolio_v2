import { ButtonLink } from 'components/Icon/Button/Button';
import { FileDownload } from 'components/Icon/Icon';
import emilie2 from 'features/AboutMe/assets/emilie-2.jpg';
import emilie3 from 'features/AboutMe/assets/emilie-3.jpg';
import emilie4 from 'features/AboutMe/assets/emilie-4.jpg';
import Pdf from 'features/AboutMe/assets/resume.pdf';
import { white } from 'features/Layout/colors';

const AboutMe: React.FC = () => {
  const birthday = new Date('1/12/1996');
  const todaysDate = new Date();
  const currentAge = todaysDate.getFullYear() - birthday.getFullYear();

  return (
    <div className="about-me">
      <div className="about-me__content">
        <h3 className="headline headline--secondary">Who am I?</h3>
        <p className="paragraph">
          I am a {currentAge} year old Frontend Developer based in Oslo, Norway.
          I studied Frontend Development at Noroff and graduated at the top of
          my class the summer of 2021.
        </p>
        <p className="paragraph">
          I chose Frontend Development as I have a great passion for structure
          and creativity, and I've found a way to implement both these passions
          of mine into the work. I burn for userfriendly design and writing
          clean code. I truly enjoy writing code and find myself doing extra
          courses and coming up with new projects on my spare time.
        </p>
        <p className="paragraph">
          Otherwise, I'm a cheerful girl who enjoys spreading the joy of life
          all around. To me happiness is everything, and this line of work truly
          makes me happy!
        </p>
        <ButtonLink link={Pdf} download theme="primary" size="md">
          <FileDownload color={white} classes="btn__icon" />
          Resume
        </ButtonLink>
      </div>

      <div className="gallery">
        <img
          src={emilie2}
          alt="Emilie standing on a viewpoint from her hometown Risør"
          className="gallery__img gallery__img--1"
        />
        <img
          src={emilie3}
          alt="Emilie standing on a beach in Stavanger"
          className="gallery__img gallery__img--2"
        />
        <img
          src={emilie4}
          alt="Emilie being visited by her brothers dog which is sitting on her lap while studying to become a frontend developer"
          className="gallery__img gallery__img--3"
        />
      </div>
    </div>
  );
};

export default AboutMe;

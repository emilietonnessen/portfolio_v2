import emilie2 from './../assets/emilie-2.jpg';
import emilie3 from '../assets/emilie-3.jpg';
import emilie4 from '../assets/emilie-4.jpg';
import { ButtonLink } from './UI/Button';
import Pdf from './../assets/resume.pdf';
import Educations from './Development/Educations';
import WorkExperiences from './Development/WorkExperiences';
import { FileDownload } from './UI/Icons';
import { white } from '../constants/colors';

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
                
            <div className="about-me__content">
                <h3 className="headline headline--secondary">A Tiny Bit about me</h3>

                <p className="paragraph">
                    I am a 25 year old student at Noroff. I am currently studying the course Frontend Development and are finished the summer of 2021.
                </p>
                <p className="paragraph">
                    I chose Frontend Development as I have a great passion for structure and creativity, and I've found a way to implement both these passions of mine into the work. I burn for userfriendly design and writing clean code. I truly enjoy writing code and find myself doing extra courses and coming up with new projects on my spare time.
                </p>
                <p className="paragraph">
                    Otherwise, I'm a cheerful girl who enjoys spreading the joy of life all around. To me happiness is everything, and this line of work truly makes me happy!
                </p>
                <ButtonLink link={Pdf} download theme="primary" size="md" >
                    <FileDownload color={white} classes="btn__icon" />
                    CV
                </ButtonLink>
            </div>

            <div className="gallery">
                <img src={emilie2} alt="Emilie 1" className="gallery__img gallery__img--1"/>
                <img src={emilie3} alt="Emilie 2" className="gallery__img gallery__img--2"/>
                <img src={emilie4} alt="Emilie 3" className="gallery__img gallery__img--3"/>
            </div>

            <Educations />
            <WorkExperiences />
        </div>
    );
}

export default AboutMe;
import React from 'react';
import emilie2 from './../assets/emilie-2.jpg';
import emilie3 from '../assets/emilie-3.jpg';
import emilie4 from '../assets/emilie-4.jpg';
import { ButtonLink } from './UI/Button';
import Pdf from './../assets/resume.pdf';
import { FileDownload } from './UI/Icons';
import { white } from '../constants/colors';
import { aboutMeDescription, aboutMeHeadline } from '../assets/content/aboutMe';
import Paragraph from './UI/Paragraph';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <div className="about-me__content">
        <h3 className="headline headline--secondary">{aboutMeHeadline}</h3>

        {aboutMeDescription.map((text, idx) => (
          <Paragraph key={idx}>{text}</Paragraph>
        ))}
        <ButtonLink link={Pdf} download theme="primary" size="md">
          <FileDownload color={white} classes="btn__icon" />
          Resume
        </ButtonLink>
      </div>

      <div className="gallery">
        <img
          src={emilie2}
          alt="Emilie in her hometown, Risør"
          className="gallery__img gallery__img--1"
        />
        <img
          src={emilie3}
          alt="Emilie posing on a beach"
          className="gallery__img gallery__img--2"
        />
        <img
          src={emilie4}
          alt="Emilie getting visited by her brothers dog while studying"
          className="gallery__img gallery__img--3"
        />
      </div>
    </div>
  );
};

export default AboutMe;

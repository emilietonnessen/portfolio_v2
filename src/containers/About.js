import emilie2 from './../assets/emilie-2.jpg';
import emilie3 from '../assets/emilie-3.jpg';
import emilie4 from '../assets/emilie-4.jpg';
import Button from '../components/UI/Button';
import cv from '../assets/CV.pdf';
import progressMin from '../assets/progress-min.png';
import progressBeginner from '../assets/progress-beginner.png';
import progressMedium from '../assets/progress-medium.png';
import progressAdvanced from '../assets/progress-advanced.png';
import progressExpert from '../assets/progress-expert.png';


const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="headline headline--primary">
                About Me 
                <span></span>
            </h2>

            <div className="about-me">
                
                <div className="about-me__content">
                    <h3 className="headline headline--secondary">A Tiny Bit about me</h3>

                    <p className="paragraph">
                        For tiden studerer jeg Frontend Utvikling hos Noroff via nettstudier. Jeg er nå på mitt siste semester og er ferdig sommeren 2021.
                    </p>
                    <p className="paragraph">
                        For meg personlig tok det en stund før jeg visste hva jeg ville bli, og brukte tid på å utforske ulike retninger. Struktur og kreativitet er noe jeg brenner for og det fant jeg mulig å utnytte i Frontend Utvikling.
                    </p>
                    <p className="paragraph">
                        Ellers er jeg en positiv og sprudlende person og sprer mye glede rundt meg. Jeg er selvstendig og realistisk, og samarbeider godt med andre. Jeg har et sterkt instinkt på å forbedre meg selv som person og i det jeg brenner for, og har derfor evne til å lære raskt.
                    </p>
                    <Button link={cv} download>
                        <i className="fas fa-file-download"></i>
                        CV
                    </Button>
                </div>

                <div className="gallery">
                    <img src={emilie2} alt="Emilie 1" className="gallery__img gallery__img--1"/>
                    <img src={emilie3} alt="Emilie 2" className="gallery__img gallery__img--2"/>
                    <img src={emilie4} alt="Emilie 3" className="gallery__img gallery__img--3"/>
                </div>
            </div>


            <div className="dev-life">
                <h3 className="headline headline--secondary">my development life</h3>

                {/* Education & Work Experience */}
                <div className="info">
                        {/* Education */}
                        <div className="education-container">
                            <h4 className="headline headline--tertiary">Education</h4>
                            <div className="education">
                                <h5 className="education__course-name">Frontend Development <span>Online</span></h5>
                                <p className="education__desc">
                                    2019 - 2021 | Noroff - School of Technology and Digital Media 
                                </p>
                            </div>
                            <div className="education">
                                <h5 className="education__course-name">Primary School <span>Risør</span> </h5>
                                <p className="education__desc">
                                    2002 - 2011 | Risør Barne - og Ungdomsskole
                                </p>
                            </div>
                        </div>
                        {/* Work Experience */}
                        <div className="work-experience">
                            <h4 className="headline headline--tertiary">Work experience</h4>
                        </div>
                </div>

                    
                
                {/* Tools: */}
                <div className="tools">
                    <h4 className="headline headline--tertiary">Tools</h4>
                    <ul className="tools__list">
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> Adobe Photoshop</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> Adobe Illustrator</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> Adobe XD</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> Adobe Acrobat</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> Postman</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> Local</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> Strapi</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> GitHub Desktop</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> Visual Studio Code</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> MS Excel</li>
                        <li className="tools__item"><i className="tools__icon fal fa-chevron-right"></i> FileZilla</li>
                    </ul>
                </div>

                {/* Backend and Frontend */}
                <div className="technical">
                    <div className="frontend">
                        <h4 className="headline headline--tertiary ">frontend</h4>
                        <div className="frontend__content">
                            <div className="html">


                                <div className="progress-indicator">
                                    <img className="progress-indicator__img" src={progressAdvanced} alt="Progress Indicator"/>
                                    <div className="progress-indicator__content">
                                        <h6 className="progress-indicator__title">HTML</h6>
                                        <p className="progress-indicator__progress">75%</p>
                                    </div>
                                </div>

                                <div className="progress-indicator">
                                    <img className="progress-indicator__img" src={progressMedium} alt="Progress Indicator"/>
                                    <div className="progress-indicator__content">
                                        <h6 className="progress-indicator__title">Bootstrap</h6>
                                        <p className="progress-indicator__progress">50%</p>
                                    </div>
                                </div>


                            </div>
                            <div className="css">


                                <div className="progress-indicator">
                                    <img className="progress-indicator__img" src={progressAdvanced} alt="Progress Indicator"/>
                                    <div className="progress-indicator__content">
                                        <h6 className="progress-indicator__title">CSS</h6>
                                        <p className="progress-indicator__progress">75%</p>
                                    </div>
                                </div>

                                <div className="progress-indicator">
                                    <img className="progress-indicator__img" src={progressAdvanced} alt="Progress Indicator"/>
                                    <div className="progress-indicator__content">
                                        <h6 className="progress-indicator__title">Sass</h6>
                                        <p className="progress-indicator__progress">75%</p>
                                    </div>
                                </div>


                            </div>

                            <div className="javascript">



                                <div className="progress-indicator">
                                    <img className="progress-indicator__img" src={progressMedium} alt="Progressbar"/>
                                    <div className="progress-indicator__content">
                                        <h6 className="progress-indicator__title">JavaScript</h6>
                                        <p className="progress-indicator__progress">50%</p>
                                    </div>
                                </div>

                                <div className="progress-indicator">
                                    <img className="progress-indicator__img" src={progressMedium} alt="Progressbar"/>
                                    <div className="progress-indicator__content">
                                        <h6 className="progress-indicator__title">React</h6>
                                        <p className="progress-indicator__progress">50%</p>
                                    </div>
                                </div>

                                <div className="progress-indicator">
                                    <img className="progress-indicator__img" src={progressBeginner} alt="Progressbar"/>
                                    <div className="progress-indicator__content">
                                        <h6 className="progress-indicator__title">TypeScript</h6>
                                        <p className="progress-indicator__progress">25%</p>
                                    </div>
                                </div>




                            </div>
                        </div>
                        
                    </div>
                    <div className="backend">
                        <h4 className="headline headline--tertiary">backend</h4>
                        <div className="backend__content">
                            <div>
                                <div className="progress-indicator">
                                    <img className="progress-indicator__img" src={progressMin} alt="Progressbar"/>
                                    <div className="progress-indicator__content">
                                        <h6 className="progress-indicator__title">PHP</h6>
                                        <p className="progress-indicator__progress">5%</p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

                {/* Courses: */}
                <div className="certificates">
                    <h4 className="headline headline--tertiary">courses</h4>
                    <div className="courses">
                        <div className="course">
                            <h5 className="course__title">Advanced CSS and Sass</h5>
                            <div className="course__certificate">
                                75% Complete
                            </div>
                        </div>

                        <div className="course">
                            <h5 className="course__title">React - The Complete Guide</h5>
                            <div className="course__certificate">
                                50% Complete
                            </div>
                        </div>

                        <div className="course">
                            <h5 className="course__title">React and TypeScript</h5>
                            <div className="course__certificate">
                                10% Complete
                            </div>
                        </div>

                        <div className="course">
                            <h5 className="course__title">The Complete JavaScript Course</h5>
                            <div className="course__certificate">
                                0% Complete
                            </div>
                        </div>

                        <div className="course">
                            <h5 className="course__title">Node.js, Express, MongoDB & More</h5>
                            <div className="course__certificate">
                                0% Complete
                            </div>
                        </div>

                        <div className="course">
                            <h5 className="course__title">Become a WordPress Developer</h5>
                            <div className="course__certificate">
                                20% Complete
                            </div>
                        </div>

                        <div className="course">
                            <h5 className="course__title">Ultimate Adobe Photoshop Training</h5>
                            <div className="course__certificate">
                                4% Complete
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>

            
            
            
        </div>
    )
}

export default About;
import progressBeginner from '../../assets/progress-beginner.png';
import progressMedium from '../../assets/progress-medium.png';
import progressAdvanced from '../../assets/progress-advanced.png';

const Frontend = () => {
    return (
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
    )
}

export default Frontend

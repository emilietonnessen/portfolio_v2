import progressMin from '../../assets/progress-min.png';

const Backend = () => {
    return (
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
    )
}

export default Backend

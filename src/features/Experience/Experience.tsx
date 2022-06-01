const Experience = () => {
  return (
    <div className="work-experiences">
      <h4 className="headline headline--tertiary">Work experience</h4>

      <div className="work-experience">
        <h5 className="work-experience__period">2021 - xxxx</h5>
        <h5 className="work-experience__workplace">Hurtigruten Pluss AS</h5>
        <p className="work-experience__description">Frontend Developer</p>
        <h5 className="work-experience__city">Oslo</h5>
      </div>

      <div className="work-experience">
        <h5 className="work-experience__period">2017 - 2018</h5>
        <h5 className="work-experience__workplace">Adecco</h5>
        <p className="work-experience__description">Barnehage Vikar</p>
        <h5 className="work-experience__city">Asker og Bærum</h5>
      </div>

      <div className="work-experience">
        <h5 className="work-experience__period">2016 - 2017</h5>
        <h5 className="work-experience__workplace">Maxbo</h5>
        <p className="work-experience__description">
          Ekstrahjelp på trelast avd.
        </p>
        <h5 className="work-experience__city">Vækerø</h5>
      </div>

      <div className="work-experience">
        <h5 className="work-experience__period">2016 - 2016</h5>
        <h5 className="work-experience__workplace">Maxbo</h5>
        <p className="work-experience__description">Trelast selger, 100%</p>
        <h5 className="work-experience__city">Vækerø</h5>
      </div>

      <div className="work-experience">
        <h5 className="work-experience__period">2014 - 2015</h5>
        <h5 className="work-experience__workplace">Monter</h5>
        <p className="work-experience__description">
          Ekstrahjelp og sesong medarbeider på trelast
        </p>
        <h5 className="work-experience__city">Risør</h5>
      </div>

      <div className="work-experience">
        <h5 className="work-experience__period">2013 - 2014</h5>
        <h5 className="work-experience__workplace">Risør Steinsenter</h5>
        <p className="work-experience__description">Sesong selger</p>
        <h5 className="work-experience__city">Risør</h5>
      </div>
      <div className="educations">
        <h4 className="headline headline--tertiary">Education</h4>

        <div className="education">
          <h5 className="education__course-name">
            Frontend Development <span>Online</span>
          </h5>
          <p className="education__desc">
            2019 - 2021 | Noroff - School of Technology and Digital Media
          </p>
        </div>

        <div className="education">
          <h5 className="education__course-name">
            Privatist <span>Oslo</span>
          </h5>
          <p className="education__desc">2016 - 2019 | Sonans Oslo</p>
        </div>

        <div className="education">
          <h5 className="education__course-name">
            VGS Elektro <span>Risør</span>
          </h5>
          <p className="education__desc">2014 - 2015 | Risør VGS</p>
        </div>

        <div className="education">
          <h5 className="education__course-name">
            VGS ST Toppidrett Sprangridning <span>Stokke</span>
          </h5>
          <p className="education__desc">2012 - 2014 | Melsom VGS</p>
        </div>

        <div className="education">
          <h5 className="education__course-name">
            Primary School <span>Risør</span>{' '}
          </h5>
          <p className="education__desc">
            2002 - 2011 | Risør Barne - og Ungdomsskole
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

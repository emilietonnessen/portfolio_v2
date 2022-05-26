const Frontend = () => {
  return (
    <div className="frontend">
      <h4 className="headline headline--tertiary ">frontend</h4>
      <div className="frontend__content-container">
        <div className="frontend__section">
          <h5 className="headline headline--h5">HTML</h5>
          <ul className="frontend__list">
            <li className="frontend__list-item">
              <i className="tools__icon fal fa-chevron-right"></i> Bootstrap
            </li>
          </ul>
        </div>
        <div className="frontend__section">
          <h5 className="headline headline--h5">CSS</h5>
          <ul className="frontend__list">
            <li className="frontend__list-item">
              <i className="tools__icon fal fa-chevron-right"></i> JSS
            </li>
            <li className="frontend__list-item">
              <i className="tools__icon fal fa-chevron-right"></i> Sass
            </li>
            <li className="frontend__list-item">
              <i className="tools__icon fal fa-chevron-right"></i> Material UI
            </li>
          </ul>
        </div>
        <div className="frontend__section">
          <h5 className="headline headline--h5">JavaScript</h5>
          <ul className="frontend__list">
            <li className="frontend__list-item">
              <i className="tools__icon fal fa-chevron-right"></i> React
            </li>
            <li className="frontend__list-item">
              <i className="tools__icon fal fa-chevron-right"></i> Next.js
            </li>
            <li className="frontend__list-item">
              <i className="tools__icon fal fa-chevron-right"></i> Redux
            </li>
            <li className="frontend__list-item">
              <i className="tools__icon fal fa-chevron-right"></i> TypeScript
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Frontend;

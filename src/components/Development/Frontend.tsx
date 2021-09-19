import Paragraph, { StrongText } from '../UI/Paragraph';

const Frontend = () => {
  return (
    <div className="frontend">
      <h4 className="headline headline--tertiary ">frontend</h4>
      <Paragraph>
        I continually use <StrongText>React</StrongText> and{' '}
        <StrongText>TypeScript</StrongText> together in each project I create
        and in my current work. I am working on learning more about{' '}
        <StrongText>E2E Testing</StrongText> and getting more experience with{' '}
        <StrongText>Redux</StrongText>. I can set up a simple{' '}
        <StrongText>Redux</StrongText> project with the current knowledge. I
        prefer styling with <StrongText>Sass</StrongText> using .scss extension,
        but I am overall very flexible with CSS frameworks and libraries. In my
        current work we are using <StrongText>Material UI</StrongText> and{' '}
        <StrongText>JSS</StrongText> for styling.
      </Paragraph>
      {/* <h5 className="headline headline--h5">WCAG, A11y</h5>
      <Paragraph>
        I try having WCAG and A11y in mind when coding and like learning more
        about these topics. I believe it is important to use create accessible
        websites for everyone to use.
      </Paragraph> */}

      {/* <h5 className="headline headline--h5">Knowledge Tree</h5>
      <ul className="frontend__list">
        <li>HTML</li>
        <ul className="frontend__sub-list">
          <li>Bootstrap</li>
        </ul>

        <li>CSS</li>
        <ul className="frontend__sub-list">
          <li>Sass, scss</li>
          <li>JSS</li>
          <ul className="frontend__sub-list">
            <li>Currently using JSS at current work</li>
          </ul>
        </ul>

        <li>JavaScript</li>
        <ul className="frontend__sub-list">
          <ul className="frontend__sub-list">
            <li>Link to Project Exam 2</li>
            <li>
              <a
                className="frontend__project-link"
                href="https://github.com/emilietonnessen/portfolio_v2"
              >
                Portfolio
              </a>
            </li>
          </ul>
          <li>Next.js</li>
          <ul className="frontend__sub-list">
            <li>
              <a
                className="frontend__project-link"
                href="https://github.com/emilietonnessen/Holidaze"
              >
                Holidaze
              </a>
            </li>
          </ul>
          <li>Redux</li>
          <ul className="frontend__sub-list">
            <li>
              <a
                className="frontend__project-link"
                href="https://github.com/emilietonnessen/portfolio_v2"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="frontend__project-link"
                href="https://github.com/emilietonnessen/todo-list"
              >
                Todo List
              </a>
            </li>
            <li>currently using in current job</li>
          </ul>
          <li>TypeScript</li>
          <ul className="frontend__sub-list">
            <li>
              <a
                className="frontend__project-link"
                href="https://github.com/emilietonnessen/portfolio_v2"
              >
                Portfolio
              </a>
            </li>
            <li>Working on a TypeScript project called JBook</li>
          </ul>
        </ul>
      </ul>
     */}
    </div>
  );
};

export default Frontend;

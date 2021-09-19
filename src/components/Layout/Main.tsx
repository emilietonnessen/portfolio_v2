import { MainProps } from 'interfaces/interfaces';

const Main: React.FC<MainProps> = ({ children }) => (
  <main className={`main`}>{children}</main>
);

export default Main;

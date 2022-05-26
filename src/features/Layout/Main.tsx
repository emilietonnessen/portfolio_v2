import { MainProps } from 'features/Layout/layout.types';

const Main = ({ children }: MainProps) => (
  <main className={`main`}>{children}</main>
);

export default Main;

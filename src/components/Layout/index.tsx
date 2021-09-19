import Footer from 'components/Layout/Footer';
import Main from 'components/Layout/Main';
import Navigation from 'components/Layout/Navigation';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
  <div className="layout">
    <Navigation />
    <Main>{children}</Main>
    <Footer />
  </div>
);

export default Layout;

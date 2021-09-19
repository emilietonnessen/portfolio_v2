import Footer from 'components/Layout/Footer';
import Main from 'components/Layout/Main';
import Navigation from 'components/Layout/Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navigation />
        <Main>{children}</Main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;

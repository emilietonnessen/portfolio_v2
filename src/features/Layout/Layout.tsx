import Footer from 'features/Layout/Footer';
import Main from 'features/Layout/Main';
import Navigation from 'features/Navigation/Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="layout">
        <Navigation />
        <Main>{children} </Main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

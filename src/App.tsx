import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
import LandingPage from 'pages/LandingPage';
import Layout from 'features/Layout/Layout';
import PortfolioPage from 'pages/PortfolioPage';
import Project from 'features/Projects/Project';
import { SelectedProjectsProvider } from 'features/Projects/SelectedProjectContext';

const App: React.FC = () => {
  return (
    <SelectedProjectsProvider>
      <Layout>
        <LandingPage />
        <PortfolioPage />
        <AboutPage />
        <ContactPage />
      </Layout>
      <Project />
    </SelectedProjectsProvider>
  );
};

export default App;

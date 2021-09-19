import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Landingpage from './pages/Landingpage';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => {
  return (
    <Layout>
      <Landingpage />
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  );
};

export default App;

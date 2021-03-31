import Footer from "./components/Layout/Footer"
import Sidebar from "./components/Layout/nav/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landingpage from "./pages/Landingpage";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
    return (
        <>
            <div className="app">
                <Sidebar />
                <Landingpage />
                <Portfolio />
                <About />
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default App;
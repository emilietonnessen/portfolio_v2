import Footer from "./components/Layout/Footer"
import Sidebar from "./components/Layout/Sidebar";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Landingpage from "./containers/Landingpage";
import Portfolio from "./containers/Portfolio";

const App = () => {
    return (
        <>
            <Sidebar />

            <div className="app">
                
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
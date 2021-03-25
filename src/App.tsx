import Footer from "./components/Layout/Footer"
import Sidebar from "./components/Layout/nav/Sidebar";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Landingpage from "./containers/Landingpage";
import Portfolio from "./containers/Portfolio";

const App = () => {
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
import Footer from "./components/Layout/Footer"
import Sidebar from "./components/Layout/Sidebar";
import Landingpage from "./containers/Landingpage";

const App = () => {
    return (
        <>
            <Sidebar />

            <div className="app">
                
                <Landingpage />
                
                
            </div>
            
            <Footer />
        </>
    );
}

export default App;
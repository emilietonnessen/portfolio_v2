import Footer from "./components/Layout/Footer"
import Sidebar from "./components/Layout/Sidebar";
import Landingpage from "./containers/Landingpage";

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <Landingpage />
            
            <Footer />
        </div>
    );
}

export default App;
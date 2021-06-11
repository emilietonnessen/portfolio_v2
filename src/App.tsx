import { useContext, useEffect } from "react";

import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landingpage from "./pages/Landingpage";
import Portfolio from "./pages/Portfolio";
import ProjectsContext from './context/ProjectsContext';
import projectsArray from './server/projects';
import Project from "./components/Project";
import { SelectedProjectsProvider } from "./context/SelectedProjectContext";


const App: React.FC = () => {

    // State
    const [projects, setProjects] = useContext(ProjectsContext); 
    
    // Set projects array to projects state
    useEffect(() => {
        setProjects(projectsArray);
    }, [projects, setProjects]);


    return (
        <SelectedProjectsProvider>
            <Layout>        
                <Landingpage />
                <Portfolio  />
                <About  />
                <Contact />
            </Layout>

            <Project />
        </SelectedProjectsProvider>
    );
}

export default App;
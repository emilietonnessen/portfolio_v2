import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProjectsProvider } from './context/ProjectsContext';
import './sass/style.scss'; 

ReactDOM.render(
    <React.StrictMode>
        <ProjectsProvider>
            <App />
        </ProjectsProvider>
    </React.StrictMode>,
    document.getElementById('root')
); 
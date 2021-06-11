import { createContext, useState } from 'react';

const SelectedProjectsContext = createContext();

export const SelectedProjectsProvider = ({ children }) => {
    const [selectedProjects, setSelectedProjects] = useState();

    return (
        <SelectedProjectsContext.Provider value={[selectedProjects, setSelectedProjects]}>
            {children}
        </SelectedProjectsContext.Provider>
    );
}

export default SelectedProjectsContext;
import Project from '../components/project/Project';
import Search from '../components/Search';
import projectsJSON from './../server/projects';
import { useEffect, useState } from 'react';
import cross from '../assets/times-light.svg';
//import magnifyingGlass from '../assets/search-regular.svg';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [/* searchFocus */, setSearchFocus] = useState(false);
    const [searchIcon, setSearchIcon] = useState('');
    const projectsArray = projectsJSON;
    let search = searchValue.trim().toLowerCase();
    
    useEffect(() => {
        setProjects(projectsArray);
    
        if(search.length > 0) {
            setProjects(projectsArray.filter(project => {
                return project.name.toLowerCase().match(search);
            }));
        } if (search.length === 0) {
            setProjects(projectsArray);
        }
    }, [search, projectsArray]);

    const searchHandler = (e) => {
        setSearchValue(e.target.value);
        setSearchFocus(true);
        setSearchIcon(cross);
    }

    //console.log(projects);

    return (
        <div className="portfolio" id="portfolio">
            <h2 className="headline headline--primary">
                Portfolio
                <span></span>
            </h2>
            
            <Search
                search={searchHandler}
                icon={searchIcon} />

            <div className="projects">
                {projects.map(project => {
                    return (
                        <Project 
                            key={project.id}
                            image={project.thumbnail}
                            title={project.name}
                            github={project.github} />
                    );
                })}

            </div>
        </div>
    );
}

export default Portfolio;
import Brand from './Brand';
import Media from './Media';
import Menu from './Menu';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Brand />
            <Menu />
            <Media />
        </div>
    );
}

export default Sidebar;
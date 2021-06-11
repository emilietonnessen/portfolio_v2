// Projects --------------------------------
export interface Projects {
    projects: Project[];
}

export interface Project {
    id: number;
    slug: string;
    name: string;
    description: string;
    link: string;
    github: string;
    school: null | boolean;
    languages: string[];
    thumbnail: string;
}




// Layout ----------------------------------
export interface NavigationMenuProps {
    onClick: () => void;
}

export interface MainProps {
    children: React.ReactNode;
}


// Navigation
export interface NavigationHamburgerIconProps {
    onClick: () => void;
    checked: boolean;
    onChange: () => void;
}




// Portfolio

export interface IconProps {
    color?: string;
    classes?: string;
}
export interface ModalProps {
    id: string; 
    link: string;
    classes: string;
    children: React.ReactNode;
}
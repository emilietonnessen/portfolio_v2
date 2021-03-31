interface ButtonProps {
    children: React.ReactNode;
    link: string;
    download?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, link, download}) => (
    <button className="btn">
        <a href={link} download={download} className="btn__link">
            {children}
        </a>
    </button>
);

export default Button;
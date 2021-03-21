const Button = ({children, link, download}) => {
    return (
        <button className="btn">
            <a href={link} download={download} className="btn__link">
                {children}
            </a>
        </button>
    );
}

export default Button;
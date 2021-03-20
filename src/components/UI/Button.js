const Button = ({children, link}) => {
    return (
        
        <button className="btn">
            <a href={link}>
                {children}
            </a>
        </button>
        
        
    )
}

export default Button;
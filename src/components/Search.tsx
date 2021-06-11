interface SearchProps {
    search: any;
    icon: any;
    onFocus: any;
    onBlur: any;
    onClick: any;
}

const Search: React.FC<SearchProps> = ({search, icon, onFocus, onBlur, onClick}) => {
    return (
        <div className="search">
            <input 
                onFocus={onFocus}
                onBlur={onBlur}
                
                type="text" 
                placeholder="Search.." 
                className="search__input"
                onChange={search}
                 />
            <button className="search__button" onClick={onClick}>
                {icon}
            </button>
        </div>
    );
}

export default Search;
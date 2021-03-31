const Search = ({search, icon, onFocus, onBlur}) => {
    return (
        <div className="search">
            <input 
                onFocus={onFocus}
                onBlur={onBlur}
                
                type="text" 
                placeholder="Search.." 
                className="search__input"
                onChange={search} />
            <button className="search__button">
                {icon}
            </button>
        </div>
    );
}

export default Search;
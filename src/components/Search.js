const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search.." className="search__input" />
            <button className="search__button">
                <i className="search__icon far fa-search"></i>
            </button>
        </div>
    )
}

export default Search

import React, { useState, useContext, useEffect, useRef } from "react";
import { SearchContext } from "../../context/SearchContext.jsx";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
    // Get the onSearch function from the SearchContext
    const {
        onSearch,
        searchType,
        setSearchType,
        bookFilter,
        setBookFilter,
        hasSearched,
    } = useContext(SearchContext);

    const [inputValue, setInputValue] = useState("");
    // e.g. if the user initially searchs for 'cat', 'all' and 'keyword', there's no problem
    // But, if the user changes the search term and then clicks on a different filter or type,
    /// it doesn't use the 'updated' search term. It uses the initial search term.
    const currentSearchTerm = useRef(inputValue);

    useEffect(() => {
        currentSearchTerm.current = inputValue;
    }, [inputValue]);

    // When the form is submitted, get the search term and call onSearch
    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue, searchType);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
        if (hasSearched && currentSearchTerm.current) {
            onSearch(currentSearchTerm.current, e.target.value);
        }
    };

    const handleFilterChange = (filter) => {
        setBookFilter(filter);
        if (hasSearched && currentSearchTerm.current) {
            onSearch(currentSearchTerm.current, searchType, filter);
        }
    };

    return (
        <form onSubmit={onSubmit} className={style.form}>
            <div>
                <div className={style.selectSearch}>
                    <select
                        className={style.select}
                        name="searchType"
                        value={searchType}
                        onChange={handleSearchTypeChange}
                    >
                        <option value="keyword">Keyword</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="category">Category</option>
                        <option value="isbn">ISBN</option>
                    </select>
                    <input
                        className={style.input}
                        type="text"
                        placeholder={
                            searchType === "isbn"
                                ? "Enter the ISBN..."
                                : searchType === "author"
                                ? "Enter an author name..."
                                : searchType === "category"
                                ? "Enter a category..."
                                : searchType === "title"
                                ? "Enter a title..."
                                : "Enter a keyword..."
                        }
                        name="search"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className={style.button}>
                        <img
                            className={style.btnIcon}
                            src="google.svg"
                            alt="google magnifying glass icon"
                        />
                    </button>
                </div>
                <div className={style.radio}>
                    {["all", "free", "paid"].map((filter) => (
                        <label key={filter}>
                            <input
                                type="radio"
                                value={filter}
                                name="bookFilter"
                                checked={bookFilter === filter}
                                onChange={() => handleFilterChange(filter)}
                            />
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </label>
                    ))}
                </div>
            </div>
        </form>
    );
};

export default SearchBar;

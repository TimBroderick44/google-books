import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchProvider.jsx";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
    // Get the onSearch function from the SearchContext
    const { onSearch } = useContext(SearchContext);

    // When the form is submitted, get the search term and call onSearch
    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchTerm = new FormData(form).get("search");
        onSearch(searchTerm);
        form.reset();
    };

    return (
        <form onSubmit={onSubmit} className={style.form}>
            <input
                className={style.input}
                type="text"
                placeholder="Enter a title, author or keyword..."
                name="search"
            />
            <br />
            <button className={style.button}>Search</button>
        </form>
    );
};

export default SearchBar;

import React, { createContext, useState } from "react";

// Create a context for the search term
const SearchContext = createContext({
    searchTerm: "",
    setSearchTerm: () => {},
    searchType: "keyword",
    setSearchType: () => {}, 
});

// Create a provider for the search term
const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [searchType, setSearchType] = useState("keyword");
    const [bookFilter, setBookFilter] = useState("all"); 

    const onSearch = (term, type) => {
        setSearchTerm(term);
        if (term !== null && term !== "") 
        setHasSearched(true);
        setSearchType(type);
    };

    return (
        <SearchContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                onSearch,
                hasSearched,
                searchType,
                setSearchType,
                bookFilter,
                setBookFilter,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export { SearchProvider as default, SearchContext };

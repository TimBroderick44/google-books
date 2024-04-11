import React, { createContext, useState } from "react";

// Create a context for the search term
const SearchContext = createContext({
    searchTerm: "",
    setSearchTerm: () => {},
});

// Create a provider for the search term
const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const onSearch = (term) => {
        if (term !== null && term !== "") 
        setSearchTerm(term);
        setHasSearched(true);
    };

    return (
        <SearchContext.Provider value={{ searchTerm, onSearch, hasSearched }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchProvider as default, SearchContext };

import React, { createContext, useState } from "react";

const SearchContext = createContext({
    searchTerm: "",
    setSearchTerm: () => {},
});

const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const onSearch = (term) => {
        setSearchTerm(term);
        if (term !== null && term !== "")
        setHasSearched(true);
    };

    return (
        <SearchContext.Provider value={{ searchTerm, onSearch, hasSearched }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchProvider as default, SearchContext };

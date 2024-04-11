import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchProvider.jsx";
import style from "./HeaderSearchContainer.module.scss";

const HeaderSearchContainer = ({ children }) => {
    const { hasSearched } = useContext(SearchContext);

    return (
        // If hasSearched is true, transition up to the top of the page
        <div
            className={`${style.box} ${hasSearched ? style.top : style.middle}`}
        >
            {children}
        </div>
    );
};

export default HeaderSearchContainer;

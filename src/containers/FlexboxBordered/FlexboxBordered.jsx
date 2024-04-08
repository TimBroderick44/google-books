import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchProvider.jsx";
import style from "./FlexboxBordered.module.scss";

const FlexboxBordered = ({ flexdirection = "column", children }) => {

    const { hasSearched } = useContext(SearchContext);

    return (
        <div style={{ flexDirection: flexdirection }} className={`${style.box} ${hasSearched ? style.top : style.middle}`}>
            {children}
        </div>
    );
};

export default FlexboxBordered;

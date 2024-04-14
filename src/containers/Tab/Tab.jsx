import React from "react";
import style from "./Tab.module.scss"; 

const Tab = ({ active, onClick, children }) => {
    return (
        <div
        // if active, add the active class.
            className={`${style.tab} ${active ? style.active : ""}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Tab;

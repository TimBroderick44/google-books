import React from "react";
import style from "./Flexbox.module.scss";

const Flexbox = ({ flexdirection = "row", justifycontent = "center", alignitems = "start", children }) => {

    return (
        <div style={{ flexDirection: flexdirection, justifyContent: justifycontent, alignItems: alignitems }} className={style.box}>
            {children}
        </div>
    );
};

export default Flexbox;

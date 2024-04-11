import React from "react";
import style from "./Flexbox.module.scss";

const Flexbox = ({
    flexdirection = "row",
    justifycontent = "center",
    alignitems = "start",
    children,
}) => {
    return (
        <div
            className={style.box}
            style={{
                flexDirection: flexdirection,
                justifyContent: justifycontent,
                alignItems: alignitems,
            }}
        >
            {children}
        </div>
    );
};
export default Flexbox;

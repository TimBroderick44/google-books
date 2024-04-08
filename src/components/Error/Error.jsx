import React from "react";
import style from "./Error.module.scss";

const Error = ({ error }) => {
    return <p className={style.error}>{error.message}</p>;
};

export default Error;

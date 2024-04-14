import React from "react";
import style from "./DescriptionTab.module.scss";

const DescriptionTab = ({ description }) => (
    <div
        className={style.description}
        dangerouslySetInnerHTML={{ __html: description }}
    />
);

export default DescriptionTab;

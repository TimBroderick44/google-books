import React from "react";
import style from "./DetailsTab.module.scss";
import { formatWithProperCase } from "../../../../utility/utilityFunctions.js";

const DetailsTab = ({ details }) => (
    <div className={style.details}>
        <p>ISBN: {details.ISBN}</p>
        <p>ISBN-10: {details.ISBN_10}</p>
        <p>Published: {details.Published}</p>
        <p>Format: {formatWithProperCase(details.Format)}</p>
        <p>Language: {details.Language.toUpperCase()}</p>
        <p>Number of Pages: {details.NumberOfPages}</p>
        <p>Publisher: {details.Publisher}</p>
        <p>Dimensions (cm): {details.Dimensions}</p>
    </div>
);

export default DetailsTab;

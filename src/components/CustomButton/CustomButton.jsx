import React from "react";
import style from "./CustomButton.module.scss";

const CustomButton = ({ onClick, className, text, href, target, rel }) => {
    if (href) {
        // If href is provided, render an <a> tag styled like a button
        return (
            <a
                href={href}
                className={`${style.button} ${className}`}
                target={target}
                rel={rel}
            >
                {text}
            </a>
        );
    } else {
        // Otherwise, render a regular button
        return (
            <button
                type="button"
                className={`${style.button} ${className}`}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
};

export default CustomButton;

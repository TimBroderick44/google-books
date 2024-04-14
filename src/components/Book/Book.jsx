import React, { useState, useEffect } from "react";
import styles from "./Book.module.scss";
import Flexbox from "../../containers/Flexbox/Flexbox.jsx";
import DOMPurify from "dompurify";

const Book = ({
    title,
    author,
    description,
    imgSRC,
    onClick,
    style: bookStyle,
}) => {

    //Get the window width for dynamic truncation of the description
    const [width, setWidth] = useState(window.innerWidth);

    // On mount, add an event listener to capture the window width
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Sanitize the description to (pratise?) prevent XSS attacks
    let sanitizedDescription = DOMPurify.sanitize(description);

    // Truncate the description if it is too long
    // Initialize shortSanitizedDescription with the full sanitized description
let maxDescriptionLength = width > 768 ? 300 : 150; /// 768 = media query breakpoint
let shortSanitizedDescription = sanitizedDescription;
if (sanitizedDescription.length > maxDescriptionLength) {
    shortSanitizedDescription =
    // Keep 0 to maxDescriptionLength characters and add "..."
        sanitizedDescription.slice(0, maxDescriptionLength) + "...";
}

    return (
        <div className={styles.book} onClick={onClick} style={bookStyle}>
            <Flexbox alignitems="center">
                <img
                    className={styles.img}
                    src={imgSRC}
                    alt={`Cover of ${title}`}
                />
            </Flexbox>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.author}>By: {author}</p>
                <div
                    className={styles.description}
                    // using dangerouslySetInnerHTML to render the sanitized description
                    dangerouslySetInnerHTML={{ __html: shortSanitizedDescription }}
                />
            </div>
        </div>
    );
};

export default Book;

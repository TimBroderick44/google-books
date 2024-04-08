import React from "react";
import styles from "./Book.module.scss";
import Flexbox from "../../containers/Flexbox/Flexbox";

function truncateText(text, maxLength) {
    if (text && text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
}

const Book = ({ title, author, description, imgSRC, onClick, style: bookStyle }) => {
    const truncatedDescription = truncateText(description, 200); 

    return (
        <div className={styles.book} onClick={onClick} style={bookStyle}>
            <Flexbox alignitems="center">
                <img
                    className={styles.img}
                    src={imgSRC}
                    alt={`Cover of ${title}`}
                />
            </Flexbox>
            <Flexbox flexdirection="column" justifycontent="start">
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.author}>By: {author}</p>
                <p className={styles.description}>{truncatedDescription}</p>
            </Flexbox>
        </div>
    );
};

export default Book;

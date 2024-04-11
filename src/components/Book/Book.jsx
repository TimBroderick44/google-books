import React from "react";
import styles from "./Book.module.scss";
import Flexbox from "../../containers/Flexbox/Flexbox.jsx";

// Shorten the description text, if longer than the max length
function shortenText(text, maxLength = 200) {
    if (text && text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
}

const Book = ({ title, author, description, imgSRC, onClick, style: bookStyle }) => {
    const truncatedDescription = shortenText(description); 

    return (
        <>
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
                    <p className={styles.description}>{truncatedDescription}</p>
                </div>
            </div>
        </>
    );
};

export default Book;

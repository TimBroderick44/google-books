import React, { useState, useEffect, useRef } from "react";
import style from "./BookExpanded.module.scss";
import DOMPurify from "dompurify";

const BookExpanded = ({ book, onClose }) => {
    if (!book) return null;

    const [isExpanded, setIsExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        // Calculate whether to show the 'Read More' button when the component mounts or updates
        const descriptionElement = descriptionRef.current;
        if (descriptionElement) {
            const isContentOverflowing =
                descriptionElement.scrollHeight >
                descriptionElement.clientHeight;
            setShowToggle(isContentOverflowing);
        }
    }, [book]);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const sanitizedDescription = DOMPurify.sanitize(
        book.volumeInfo.description || "No description available."
    );

    return (
        <div className={style.container}>
            <div className={style.expandedBook}>
                <h2 className={style.title}>{book.volumeInfo.title}</h2>
                <button className={style.closeBtn__corner} onClick={onClose}>
                    X
                </button>
                <p className={style.author}>
                    {book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(", ")
                        : "Unknown Author"}
                </p>
                <p className={style.category}>
                    {book.volumeInfo.categories &&
                    book.volumeInfo.categories.length > 0
                        ? book.volumeInfo.categories[0]
                        : "No category available"}
                </p>
                <p className={style.rating}> {book.volumeInfo.averageRating || "No rating available"} out of 5 stars. </p>
                <p className={style.pageCount}>
                    {book.volumeInfo.pageCount} pages
                </p>
                <p className={style.date}>
                    Published Date: {book.volumeInfo.publishedDate}
                </p>
                <p className={style.publisher}>
                    Publisher: {book.volumeInfo.publisher}
                </p>
                <div
                    ref={descriptionRef}
                    className={`${style.description} ${
                        isExpanded ? style.expanded : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                />
                {showToggle && (
                    <button onClick={toggleDescription}>
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                )}
                <p className={style.price}>
                    {book.saleInfo && book.saleInfo.retailPrice
                        ? `$${book.saleInfo.retailPrice.amount}`
                        : "Price not available"}
                </p>
                <p className={style.link}>
                    {book.saleInfo && book.saleInfo.buyLink ? (
                        <a
                            href={book.saleInfo.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Purchase here
                        </a>
                    ) : (
                        "Buy link not available"
                    )}
                </p>
                <div className={style.imgBtn}>
                    <img
                        className={style.img}
                        src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
                        alt={`Cover of ${book.volumeInfo.title}`}
                    />
                    <br />
                    <button className={style.closeBtn} onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookExpanded;

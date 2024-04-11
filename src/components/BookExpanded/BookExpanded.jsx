import React, { useState, useEffect, useRef } from "react";
import Flexbox from "../../containers/Flexbox/Flexbox.jsx";
import Tab from "./Tab/Tab.jsx";
import style from "./BookExpanded.module.scss";
import DOMPurify from "dompurify";

// Destructure
const BookExpanded = ({
    book,
    productDetails,
    onClose,
    bookReviews,
    authorBio,
}) => {

    // If there is no book, return null
    if (!book) return null;

    // UseState for activeTab
    const [activeTab, setActiveTab] = useState("description");

    // Allow for clicking outside of the expanded book to close it
    const expandedRef = useRef(null);

    // UseEffect for clicking outside of the expanded book to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                // If expandedRef.current is not null and the event target is not within the expandedRef.current (i.e. the expanded book)
                expandedRef.current &&
                !expandedRef.current.contains(event.target)
            ) {
                onClose();
            }
        };

        // Add event listener for mousedown and call handleClickOutside
        document.addEventListener("mousedown", handleClickOutside);

        // Set overflow to hidden to prevent scrolling
        document.body.style.overflow = "hidden";

        // Return a cleanup function to remove the event listener and set overflow back to visible
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);

            // Set overflow back to visible
            document.body.style.overflow = "";
        };
    }, [onClose]);

    // Sanitize the description
    const sanitizedDescription = DOMPurify.sanitize(
        book.volumeInfo.description || "No description available."
    );

    // Format the string with proper case
    const formatWithProperCase = (str) => {
        return str
        // Capitalise the letter and make the rest of the string lowercase
            ? `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
            : "";
    };

    // Function to replace score with stars
    const getStarRating = (rating) => {
        if (rating) {
            // if there is a rating, replace with stars 
            const roundedRating = Math.floor(rating);
            return "⭐".repeat(roundedRating);
        }
        return "No rating available";
    };

    return (
        <div className={style.container}>
        {/* ref avoids happening on re-render and only when the listener is 'activated' */}
            <div className={style.expandedBook} ref={expandedRef}>
                <div className={style.bookHeader}>
                    <Flexbox justifycontent="center" alignitems="center">
                        <img
                            className={style.img}
                            // Use this link for larger images
                            src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
                            alt={`Cover of ${book.volumeInfo.title}`}
                        />
                    </Flexbox>
                    <div className={style.bookInfo}>
                        <h2 className={style.title}>{book.volumeInfo.title}</h2>
                        <p className={style.author}>
                            {book.volumeInfo.authors
                                ? book.volumeInfo.authors.join(", ")
                                : "Unknown Author"}
                        </p>

                        <p className={style.rating}>
                            {getStarRating(book.volumeInfo.averageRating)}
                            {book.volumeInfo.averageRating}
                        </p>

                        <p className={style.price}>
                            {/* Weird '?' === could be empty */}
                            {/* Sometimes prices are in Yen (for me) */}
                            {book.saleInfo?.listPrice?.amount
                                ? book.saleInfo.listPrice.amount > 100
                                    ? `¥${book.saleInfo.listPrice.amount}`
                                    : `$${book.saleInfo.listPrice.amount}`
                                : "Currently unavailable"}
                        </p>
                        {/* If there is a price, show the 'buy' button */}
                        {book.saleInfo.retailPrice && (
                            <p className={style.buyLink}>
                                {book.saleInfo.buyLink ? (
                                    <a
                                        href={book.saleInfo.buyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Buy Now
                                    </a>
                                ) : (
                                    "Buy Now"
                                )}
                            </p>
                        )}
                    </div>
                    {/* Apply a sticker if 5 out 5 stars */}
                    {book.volumeInfo.averageRating > 4 && (
                        <img
                            className={style.recommend}
                            src="recommend.png"
                            alt="Recommended"
                        />
                    )}
                </div>
                {/* Tab components allow for seperate sections */}
                <div className={style.bookTabs}>
                    <Tab
                        active={activeTab === "description"}
                        onClick={() => setActiveTab("description")}
                    >
                        Description
                    </Tab>
                    <Tab
                        active={activeTab === "details"}
                        onClick={() => setActiveTab("details")}
                    >
                        Product Details
                    </Tab>
                    <Tab
                        active={activeTab === "author"}
                        onClick={() => setActiveTab("author")}
                    >
                        About the Author
                    </Tab>
                    <Tab
                        active={activeTab === "reviews"}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Reviews
                    </Tab>
                </div>
                <div className={style.tabContent}>
                    {activeTab === "description" && (
                        <div
                            className={style.description}
                            // Asked somebody what this is and how to deal with it
                            dangerouslySetInnerHTML={{
                                __html: sanitizedDescription,
                            }}
                        />
                    )}
                    {activeTab === "details" && (
                        <div className={style.details}>
                            <p>ISBN: {productDetails.ISBN}</p>
                            <p>ISBN-10: {productDetails.ISBN_10}</p>
                            <p>Published: {productDetails.Published}</p>
                            <p>
                                Format:
                                {formatWithProperCase(
                                    book.volumeInfo.printType
                                )}
                            </p>
                            <p>
                                Language:
                                {productDetails.Language.toUpperCase()}
                            </p>
                            <p>
                                Number of Pages: {productDetails.NumberOfPages}
                            </p>
                            <p>Publisher: {productDetails.Publisher}</p>
                            <p>Dimensions (cm): {productDetails.Dimensions}</p>
                        </div>
                    )}
                    {activeTab === "author" && (
                        <div>
                            <h3 className={style.bio}>
                                {book.volumeInfo.authors}
                            </h3>
                            <p>{authorBio}</p>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <>
                        {/* Map over random selection of 'reviews' and render */}
                            {bookReviews.map((review, index) => (
                                <div key={index} className={style.review}>
                                    <p>
                                        <strong>{review.reviewer}</strong> -{" "}
                                        <em>{review.date}</em>
                                    </p>
                                    <p>{review.comment}</p>
                                    <p>{review.stars}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <button className={style.closeBtn} onClick={onClose}>
                    Close
                </button>
                <button className={style.closeBtn__corner} onClick={onClose}>
                    X
                </button>
            </div>
        </div>
    );
};

export default BookExpanded;

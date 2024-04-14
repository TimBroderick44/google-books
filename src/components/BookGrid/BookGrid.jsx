import React, { useState } from "react";
import Book from "../Book/Book.jsx";
import style from "./BookGrid.module.scss";
import BookExpandedLoader from "../BookExpandedLoader/BookExpandedLoader.jsx";

const BookGrid = ({ bookData }) => {
    const [selectedBook, setSelectedBook] = useState(null);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    return (
        <div className={style.grid}>
            {/* Map over the bookData and return a Book component for each book */}
            {bookData.map((book, index) => {
                // destructure the book object
                const { volumeInfo, searchInfo } = book;
                // destructure the volumeInfo object
                const { title, authors, imageLinks } = volumeInfo;
                const imgSRC = imageLinks?.thumbnail || "book.png";

                // Factor in there could be no textSnippet or description
                const description =
                    searchInfo?.textSnippet ||
                    volumeInfo.description ||
                    "No description available.";

                // Add a delay to the animation
                const delay = `${index * 0.2}s`;
                return (
                    <Book
                        key={book.id}
                        title={title}
                        author={authors ? authors.join(", ") : "Unknown Author"}
                        description={description}
                        imgSRC={imgSRC}
                        // Sets the selected as the book we want more info on.
                        onClick={() => handleBookClick(book)}
                        style={{ animationDelay: delay }}
                    />
                );
            })}
            {/* If a book is selected, render the BookExpandedLoader component */}
            {selectedBook && (
                <BookExpandedLoader
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                />
            )}
        </div>
    );
};

export default BookGrid;

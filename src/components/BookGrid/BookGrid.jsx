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
                const { volumeInfo } = book;
                const { title, authors, description, imageLinks } = volumeInfo;
                const imgSRC =
                    imageLinks && imageLinks.thumbnail
                        ? imageLinks.thumbnail
                        : "book.png";

                // Add a delay to the animation
                const delay = `${index * 0.1}s`;
                return (
                    <Book
                        key={book.id}
                        title={title}
                        author={authors ? authors.join(", ") : "Unknown Author"}
                        description={
                            description
                                ? description
                                : "No description available."
                        }
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

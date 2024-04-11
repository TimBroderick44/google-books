import React, { useState, useEffect } from "react";
import { getBookDetailsById } from "../../services/book-services";
import BookExpanded from "../BookExpanded/BookExpanded.jsx";
import Loading from "../Loading/Loading.jsx";
import Error from "../Error/Error.jsx";
import reviews from "../../data/fakeReviews.js";
import authorBios from "../../data/fakeAuthors.js";

const BookExpandedLoader = ({ book, onClose }) => {
    const [bookDetails, setBookDetails] = useState(null);
    const [productDetails, setProductDetails] = useState(null);
    const [bookReviews, setBookReviews] = useState([]);
    const [authorBio, setAuthorBio] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // if there is a book and the book has an id
        if (book && book.id) {
            // Show the loading component
            setLoading(true);
            // Fetch detailed information
            getBookDetailsById(book.id)
                .then((data) => {
                    // Set the book details and product details
                    setBookDetails(data);
                    setProductDetails(getProductDetails(data));

                    // Shuffle the reviews
                    const shuffledReviews = [...reviews].sort(
                        () => 0.5 - Math.random()
                    );
                    // Set the first 5 reviews
                    setBookReviews(shuffledReviews.slice(0, 5));

                    // Set a random author bio
                    const randomBioIndex = Math.floor(
                        Math.random() * authorBios.length
                    );
                    setAuthorBio(authorBios[randomBioIndex].bio);

                    // Hide the loading component
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching:", err);
                    setError(err);
                    setLoading(false);
                });
        }
    // dependent on any changes to the book prop
    }, [book]);

    // Extract the product details
    const getProductDetails = (book) => {
        const dimensions = book.volumeInfo.dimensions;

        // Format the dimensions 
        // If the dimensions are available, display them, otherwise display "N/A"
        const dimensionsString = dimensions
            ? `${dimensions.height || "N/A"} x ${dimensions.width || "N/A"} x ${
                  dimensions.thickness || "N/A"
              }`
            : "Not available";

        return {
            // If the book has an id, use it, otherwise use "N/A"
            ISBN: book.volumeInfo.industryIdentifiers?.find(
                (id) => id.type === "ISBN_13"
            )?.identifier,
            // If the book has an ISBN_10, use it, otherwise use "N/A"
            ISBN_10: book.volumeInfo.industryIdentifiers?.find(
                (id) => id.type === "ISBN_10"
            )?.identifier,
            Published: book.volumeInfo.publishedDate,
            Format: book.volumeInfo.printType,
            Language: book.volumeInfo.language,
            NumberOfPages: book.volumeInfo.pageCount,
            Publisher: book.volumeInfo.publisher,
            Dimensions: dimensionsString,
        };
    };

    return (
        <>
            {loading && <Loading />}
            {!loading && error && <Error error={error} />}
            {!loading && bookDetails && (
                <BookExpanded
                    book={bookDetails}
                    productDetails={productDetails}
                    onClose={onClose}
                    bookReviews={bookReviews}
                    authorBio={authorBio}
                />
            )}
        </>
    );
};

export default BookExpandedLoader;

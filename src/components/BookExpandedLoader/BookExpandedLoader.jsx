import React, { useState, useEffect, useRef, useContext } from "react";
import { getBookDetailsById } from "../../services/book-services";
import BookExpanded from "../BookExpanded/BookExpanded.jsx";
import Loading from "../Loading/Loading.jsx";
import Error from "../Error/Error.jsx";
import reviews from "../../data/fakeReviews.js";
import authorBios from "../../data/fakeAuthors.js";
import DOMPurify from "dompurify";  
import { DelayContext } from "../../context/DelayContext.jsx";

const BookExpandedLoader = ({ book, onClose }) => {
    const { delay } = useContext(DelayContext);
    const [bookDetails, setBookDetails] = useState(null);
    const [productDetails, setProductDetails] = useState(null);
    const [bookReviews, setBookReviews] = useState([]);
    const [authorBio, setAuthorBio] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
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

    useEffect(() => {
        // if there is a book and the book has an id
        if (book && book.id) {
            // Show the loading component
            setLoading(true);
            // Fetch detailed information

            // Delay the fetch to simulate a slower network (can show off the loading facts)
            setTimeout(() => {
                getBookDetailsById(book.id)
                    .then((data) => {
                        const sanitizedDescription = DOMPurify.sanitize(
                            data.volumeInfo.description ||
                                "No description available."
                        );
                        const priceInfo = getPriceInfo(data.saleInfo);
                        setBookDetails(data);
                        // Creates the product details object. Brings it all together.
                        setProductDetails({
                            ...getProductDetails(data),
                            sanitizedDescription,
                            priceInfo,
                        });
                        // Randomly select 5 reviews to display
                        setBookReviews(
                            reviews.sort(() => 0.5 - Math.random()).slice(0, 5)
                        );
                        // Randomly select an author bio to display
                        if (data.volumeInfo.authors) {
                            const authorBiosWithDetails =
                                data.volumeInfo.authors.map((author) => ({
                                    name: author,
                                    bio: getRandomBio(),
                                }));
                            setAuthorBio(authorBiosWithDetails);
                        }
                    })
                    .catch((err) => {
                        console.error("Error fetching:", err);
                        setError(err.message);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }, delay); // delay is from the DelayContext
        }
        // dependent on any changes to the book prop
    }, [book]);

    // Get a random bio
    const getRandomBio = () => {
        const randomIndex = Math.floor(Math.random() * authorBios.length);
        return authorBios[randomIndex].bio;
    };

    // Extract the product details and create a new object with the formatted details
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
            // industryIdentifiers: [
            //     {
            //         type: "ISBN_10",
            //         identifier: "1407145568",
            //     },
            //     {
            //         type: "ISBN_13",
            //         identifier: "9781407145563",
            //     },
            // ],
            // Because the key is 'type', we need to use .find() and if it exists (? = it might not), then use the identifier
            ISBN:
                book.volumeInfo.industryIdentifiers?.find(
                    (id) => id.type === "ISBN_13"
                )?.identifier || "N/A",
            ISBN_10:
                book.volumeInfo.industryIdentifiers?.find(
                    (id) => id.type === "ISBN_10"
                )?.identifier || "N/A",
            Published: book.volumeInfo.publishedDate || "N/A",
            Format: book.volumeInfo.printType || "N/A",
            Language: book.volumeInfo.language || "N/A",
            NumberOfPages: book.volumeInfo.pageCount || "N/A",
            Publisher: book.volumeInfo.publisher || "N/A",
            Dimensions: dimensionsString,
        };
    };

    // Get the price information and adjust if not available
    const getPriceInfo = (saleInfo) => {
        if (!saleInfo.listPrice?.amount) {
            if (saleInfo.saleability === "NOT_FOR_SALE") {
                return { text: "Not available", className: "priceUnavailable" };
            } else if (
                saleInfo.saleability === "FREE" ||
                saleInfo.retailPrice?.amount === 0
            ) {
                return { text: "Free", className: "priceFree" };
            } else {
                return {
                    text: "Price is Unavailable",
                    className: "priceUnavailable",
                };
            }
        } else {
            const priceText =
                // If the price is greater than 100, probably yen, otherwise display as dollars.
                // Need a VPN, otherwise everything in Japanese
                saleInfo.listPrice.amount > 100
                    ? `¥${saleInfo.listPrice.amount}`
                    : `$${saleInfo.listPrice.amount}`;
            return { text: priceText, className: "price" };
        }
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
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    expandedRef={expandedRef}
                    // separate from productDetails to pass onto the BookExpandedHeader later
                    priceInfo={productDetails.priceInfo}
                />
            )}
        </>
    );
};

export default BookExpandedLoader;

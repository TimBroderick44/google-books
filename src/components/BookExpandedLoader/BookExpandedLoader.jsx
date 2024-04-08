import React, { useState, useEffect } from "react";
import { getBookDetailsById } from "../../services/book-services";
import Flexbox from "../../containers/Flexbox/Flexbox.jsx";
import BookExpanded from "../BookExpanded/BookExpanded.jsx";
import Loading from "../Loading/Loading.jsx"; 
import Error from "../Error/Error.jsx"; 

const BookExpandedLoader = ({ book, onClose }) => {
    const [bookDetails, setBookDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
    if (book && book.id) {
        setLoading(true);
        getBookDetailsById(book.id)
            .then((data) => {
                setBookDetails(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching book details:", err);
                setError(err);
                setLoading(false);
            });
    }
}, [book]);
    
    return (
        <Flexbox>
            {loading && <Loading />}
            {!loading && error && <Error error={error} />}
            {!loading && bookDetails && (
                <BookExpanded book={bookDetails} onClose={onClose} />
            )}
        </Flexbox>
    );
};

export default BookExpandedLoader;

import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext.jsx";
import BookGrid from "../BookGrid/BookGrid.jsx";
import Error from "../Error/Error.jsx";
import Loading from "../Loading/Loading.jsx";
import Flexbox from "../../containers/Flexbox/Flexbox.jsx";
import { fetchBooks } from "../../services/book-services.js"; 
import { DelayContext } from "../../context/DelayContext.jsx";

const BookLoader = () => {
    const { searchTerm, searchType, bookFilter } = useContext(SearchContext);  
    const { delay } = useContext(DelayContext);  
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // If there is a search term, fetch the books
        if (searchTerm !== null) {
            setError(null);
            setLoading(true);

            setTimeout(() => {
                fetchBooks(searchTerm, searchType, bookFilter)
                    .then((data) => {
                        setBookData(data);
                    })
                    .catch((err) => {
                        console.error("Error fetching:", err);
                        setError(err.message); // Use err.message to display a more user-friendly message
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }, delay); // Apply delay
        }
    }, [searchTerm, searchType, bookFilter, delay]);;

    return (
        <>
        <Flexbox flexdirection="column" alignitems="center" >
            {loading && <Loading />}
            {!loading && error && <Error error={error} />}
            {!loading && bookData && <BookGrid bookData={bookData} />}
        </Flexbox>
        </>
    );
};

export default BookLoader;

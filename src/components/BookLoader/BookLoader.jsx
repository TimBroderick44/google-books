import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchProvider.jsx";
import BookGrid from "../BookGrid/BookGrid.jsx";
import Error from "../Error/Error.jsx";
import Loading from "../Loading/Loading.jsx";
import Flexbox from "../../containers/Flexbox/Flexbox.jsx";
import { getBooksBySearchTerm } from "../../services/book-services.js";

const BookLoader = () => {
    const { searchTerm } = useContext(SearchContext);
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // If there is a search term, fetch the books
        if (searchTerm !== null) {
            setError(null);
            setLoading(true);

            // Same as with Martyna & Alex
            getBooksBySearchTerm(searchTerm)
                .then((data) => setBookData(data))
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
        }
    // dependent on any changes to the search term  
    }, [searchTerm]);

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

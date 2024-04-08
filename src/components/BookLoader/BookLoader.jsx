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
        if (searchTerm !== null) {
            setError(null);
            setLoading(true);

            getBooksBySearchTerm(searchTerm)
                .then((data) => setBookData(data))
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
        }
    }, [searchTerm]);

    return (
        <Flexbox>
            {loading && <Loading />}
            {!loading && error && <Error error={error} />}
            {!loading && bookData && <BookGrid bookData={bookData} />}
        </Flexbox>
    );
};

export default BookLoader;


export const fetchBooks = async (searchTerm, searchType, bookFilter, maxResults = 40) => {
    if (!searchTerm || searchTerm.trim() === "") {
        console.log("No Search Term!");
        throw new Error("(Psst! You forgot to write something...)");
    }

    // The URL only differs by the query prefix (e.g. inauthor:, isbn:, etc.)
    let queryPrefix = "";
    switch (searchType) {
        case "author":
            queryPrefix = "inauthor:";
            break;
        case "isbn":
            queryPrefix = "isbn:";
            break;  
        case "category":
            queryPrefix = "subject:";
            break;  
        case "title":
            queryPrefix = "intitle:";
            break;
        default:
            queryPrefix = "";
            break;
    }

const filterQuery = bookFilter === "free" ? "&filter=free-ebooks" : 
                    bookFilter === "paid" ? "&filter=paid-ebooks" : "";

    const url = `https://www.googleapis.com/books/v1/volumes?q=${queryPrefix}${encodeURIComponent(searchTerm)}&maxResults=${maxResults}${filterQuery}`;

    const response = await fetch(url);

    if (!response.ok) {
        console.log("Error fetching books");
        throw new Error("An error has occurred. Please try again!");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
        console.log("Nothing matches");
        throw new Error("Uh-Oh!! Nothing was found for: " + searchTerm);
    }

    return data.items;
};

export const getBookDetailsById = async (bookId) => {
    if (!bookId || bookId.trim() === "") {
        throw new Error("Book ID is required");
    }

    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
    );

    if (!response.ok) {
        console.error("Failed to fetch book details");
        throw new Error("An error occurred while getting the book details");
    }

    const bookDetails = await response.json();
    return bookDetails;
};

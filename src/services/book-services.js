export const getBooksBySearchTerm = async (searchTerm) => {
    if (!searchTerm || searchTerm.trim() === "") {
        console.log("No Search Term!");
        throw new Error("(Psst! You forgot to write something...)");
    }
    const maxResults = 40;

    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}`
    );

    /// TODO: All user to search by author or title (three choices: title, author or keyword)

    // If the response is not ok, throw an error
    if (!response.ok) {
        console.log("Error fetching books");
        throw new Error("An error has occurred. Please try again!");
    }

    const data = await response.json();
    const items = data.items;

    // If there are no items, throw an error
    if (!items || items.length === 0) {
        console.log("Nothing matches");
        throw new Error("No books were found for: " + searchTerm);
    }

    return items;
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

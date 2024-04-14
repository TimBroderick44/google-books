// Format the string with proper case
export const formatWithProperCase = (str) => {
    return str
        ? // Capitalise the letter and make the rest of the string lowercase
          `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
        : "";
};

// Function to replace score with stars
export const getStarRating = (rating) => {
    if (rating) {
        // if there is a rating, replace with stars
        const roundedRating = Math.floor(rating);
        return "⭐".repeat(roundedRating);
    }
    return "No rating available";
};

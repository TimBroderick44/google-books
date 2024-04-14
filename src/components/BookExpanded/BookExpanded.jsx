import React from "react";
import Tab from "../../containers/Tab/Tab.jsx";
import DescriptionTab from "./subcomponents/DescriptionTab/DescriptionTab.jsx";
import DetailsTab from "./subcomponents/DetailsTab/DetailsTab.jsx";
import AuthorTab from "./subcomponents/AuthorTab/AuthorTab.jsx";
import ReviewsTab from "./subcomponents/ReviewsTab/ReviewTab.jsx";
import style from "./BookExpanded.module.scss";
import { getStarRating } from "../../utility/utilityFunctions.js";
import CustomButton from "../CustomButton/CustomButton.jsx";
import BookExpandedHeader from "../BookExpandedHeader/BookExpandedHeader.jsx";

// Destructure
const BookExpanded = ({
    book,
    productDetails,
    onClose,
    bookReviews,
    authorBio,
    activeTab,
    setActiveTab,
    expandedRef,
    priceInfo,
}) => {
    // If there is no book, return null
    if (!book) return null;

    return (
        <div className={style.container}>
            {/* ref avoids happening on re-render and only when the listener is 'activated' */}
            <div className={style.expandedBook} ref={expandedRef}>
                <BookExpandedHeader
                    book={book}
                    getStarRating={getStarRating}
                    priceInfo={priceInfo}
                    saleInfo={book.saleInfo}
                />
                {/* Tab components allow for seperate sections */}
                <div className={style.bookTabs}>
                    <Tab
                        active={activeTab === "description"}
                        onClick={() => setActiveTab("description")}
                    >
                        Description
                    </Tab>
                    <Tab
                        active={activeTab === "details"}
                        onClick={() => setActiveTab("details")}
                    >
                        Product Details
                    </Tab>
                    <Tab
                        active={activeTab === "author"}
                        onClick={() => setActiveTab("author")}
                    >
                        About the Author
                    </Tab>
                    <Tab
                        active={activeTab === "reviews"}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Reviews
                    </Tab>
                </div>

                <div className={style.tabContent}>
                    {activeTab === "description" && (
                        <DescriptionTab
                            description={productDetails.sanitizedDescription}
                        />
                    )}
                    {activeTab === "details" && (
                        <DetailsTab details={productDetails} />
                    )}
                    {activeTab === "author" && (
                        <AuthorTab
                            authors={book.volumeInfo.authors}
                            authorBio={authorBio}
                        />
                    )}
                    {activeTab === "reviews" && (
                        <ReviewsTab reviews={bookReviews} />
                    )}
                </div>
                <CustomButton
                    onClick={onClose}
                    className={style.closeBtn}
                    text="Close"
                />
            </div>
        </div>
    );
};

export default BookExpanded;

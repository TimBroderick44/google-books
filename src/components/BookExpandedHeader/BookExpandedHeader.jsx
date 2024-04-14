import React from "react";
import Flexbox from "../../containers/Flexbox/Flexbox.jsx";
import CustomButton from "../CustomButton/CustomButton.jsx";
import style from "./BookExpandedHeader.module.scss";

const BookExpandedHeader = ({ book, getStarRating, priceInfo }) => {
    return (
        <div className={style.bookHeader}>
            <Flexbox justifycontent="center" alignitems="center">
                <img
                    className={style.img}
                    // Use this link for larger images
                    src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
                    alt={`Cover of ${book.volumeInfo.title}`}
                />
            </Flexbox>
            <div className={style.bookInfo}>
                <h2 className={style.title}>{book.volumeInfo.title}</h2>
                <p className={style.author}>
                    {book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(", ")
                        : "Unknown Author"}
                </p>
                <p className={style.rating}>
                    {getStarRating(book.volumeInfo.averageRating)}
                    {book.volumeInfo.averageRating}
                </p>

                <p className={`${style.price} ${style[priceInfo.className]}`}>
                    {priceInfo.text}
                </p>
                <Flexbox justifycontent="start" alignitems="center">
                    {book.saleInfo.saleability !== "NOT_FOR_SALE" && (
                        <CustomButton
                            href={book.saleInfo.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.buyLink}
                            text={
                                book.saleInfo.saleability !== "FREE"
                                    ? "Buy Now"
                                    : "Get Now"
                            }
                        />
                    )}
                    {book.saleInfo.saleability !== "FREE" && (
                        <CustomButton
                            href={book.accessInfo.webReaderLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.sampleLink}
                            text="Sample"
                        />
                    )}
                </Flexbox>
            </div>

            {/* Apply a sticker if 5 out 5 stars */}
            {book.volumeInfo.averageRating > 4 && (
                <div className={style.recommendContainer}>
                    <img
                        className={style.recommend}
                        src="recommend.png"
                        alt="Recommended"
                    />
                </div>
            )}
        </div>
    );
};

export default BookExpandedHeader;

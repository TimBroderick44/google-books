import React from "react";
import style from "./ReviewTab.module.scss";

const ReviewsTab = ({ reviews }) => (
    <>
        {reviews.map((review, index) => (
            <div key={index} className={style.review}>
                <p>
                    <strong>{review.reviewer}</strong> - <em>{review.date}</em>
                </p>
                <p>{review.comment}</p>
                <p>{review.stars}</p>
            </div>
        ))}
    </>
);

export default ReviewsTab;

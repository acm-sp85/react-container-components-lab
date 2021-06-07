// Code MovieReviews Here
import React from 'react';

const MovieReview = (props) => {

    return (
    <div className="review-list">
        <div className="review">
            <h3>{props.reviews.display_title}</h3>
            <p>{props.reviews.headline}</p>
            <p>{props.reviews.summary_short}</p>
        </div>
    </div>
    )
}
export default MovieReview;

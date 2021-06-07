// Code MovieReviews Here
import React from 'react';

const MovieReview = (props) => {

    return (
    <div className="review-list">

        {props.reviews.map(movie => {
            return (

        <div className="review" key={movie.date_updated}>
            <h3>{movie.display_title}</h3>
            <p>{movie.headline}</p>
            <p>{movie.summary_short}</p>
        </div>
            )


        })}
    </div>
    )
}
export default MovieReview;

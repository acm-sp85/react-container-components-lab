import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = { 
        reviews: [],
        searchTerm: ""
     }

     handleChange = event => {this.setState({searchTerm: event.target.value})}

     handleSubmit = event => {
        event.preventDefault()
        const querry = this.state.searchTerm
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${querry}&api-key=${NYT_API_KEY}
        `)
        .then(response => response.json())
        .then(data=>{
            this.setState({
                reviews: data.results
            })
        })
     }



    render() { 
        const reviews = this.state.reviews
        return ( 
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Lookup a movie review:</label>
                    <input id="movieToFind" type="text" name="movieToFind" value={this.state.searchTerm} onChange={this.handleChange}></input>

                </form>
                {reviews.map(movie => <MovieReviews reviews={movie} key={movie.date_updated}/>)}
            </div>
            
         );
    }
}
 
export default SearchableMovieReviewsContainer;
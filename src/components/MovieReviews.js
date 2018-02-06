// Code MovieReviews Here
import React from 'react';
 
 //write this way, then all variables must be api_specific keys
 const Review = ({ display_title, headline, summary_short}) => {
   return (
     <div key={headline} className="review">
       <h3>{display_title}</h3>
       <h4>{headline}</h4>
       <p>{summary_short}</p>
     </div>
   )
 }
 
 //MovieReviews takes its prop 'reviews' (which is an array of reviews) from
 //<MovieReviews reviews={this.state.reviews} /> from LatestMovieReviewsContainer
 const MovieReviews = ({ reviews }) => {
   return (
     <div className="review-list">{reviews.map(Review)}</div>
   )
 }
 
 MovieReviews.defaultProps = {
   reviews: []
 }
 
 export default MovieReviews;
 
 // const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;
 //
 // MovieReviews.defaultProps = {
 //   reviews: []
 // };
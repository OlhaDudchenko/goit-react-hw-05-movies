import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as movieAPI from "../../services/movies-api";
import { ReviewList, Text, Author } from "./ReviewsView.styled";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    movieAPI.fetchReview(movieId).then(setReviews);
  }, [movieId]);
  // console.log(reviews)
  return (
    <>
      {reviews && (
        <ReviewList>
          {reviews.map((review) => (
            <li key={review.id}>
              <Author>Author: {review.author}</Author>
              <Text>{review.content}</Text>
            </li>
          ))}
        </ReviewList>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
}

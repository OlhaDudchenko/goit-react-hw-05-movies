import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as movieAPI from "../../services/movies-api";

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
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <span>{review.content}</span>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
}

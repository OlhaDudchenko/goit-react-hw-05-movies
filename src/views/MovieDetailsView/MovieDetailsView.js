import { useParams, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import {
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import * as movieAPI from "../../services/movies-api";
import { Button } from "../SearchBar/SearchBar.styled";
import { CastList } from "./MovieDetailsView.styled";

const imageSRC = "https://image.tmdb.org/t/p/w500";
const CastView = lazy(() =>
  import("../MovieCastView/MovieCastView" /* webpackChunkName: "cast-view" */)
);
const Reviews = lazy(() =>
  import("../ReviewsView/ReviewsView" /* webpackChunkName: "reviews-view" */)
);

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const prevLocation = location?.state?.from ?? "/";

  useEffect(() => {
    movieAPI
      .fetchMovieById(movieId)
      .then(setMovie)
      .catch((error) => setError(error));
  }, [movieId]);
  // console.log(movie)
  const data = (value) => {
    return "(" + value.slice(0, 4) + ")";
  };

  const genres = (value) => {
    return value.map((v) => v.name).join(" ");
  };

  const OnGoBack = () => {
    history.push(location?.state?.from ?? "/movies");
  };

  return (
    <>
      {error && <h2>Sorry,there is no information about this film</h2>}
      {movie && (
        <>
          <Button type="button" onClick={OnGoBack}>
            Go back
          </Button>
          <h2>{`${movie.title}${data(movie.release_date)}`}</h2>
          <div style={{ display: "flex", textAlign: "left" }}>
            <img
              style={{ marginRight: "20px" }}
              src={`${imageSRC}${movie.poster_path}`}
              alt={movie.title}
              width="250"
              height="300"
            />
            <div>
              <p>user score: {movie.vote_average * 10}%</p>
              <p>Owerview:</p>
              <p>{movie.overview}</p>
              <p>Genres:</p>
              <span>{genres(movie.genres)}</span>
            </div>
          </div>
          <CastList>
            Additional information
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "inherit" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
                to={{
                  pathname: `${url}/cast`,
                  state: { from: prevLocation },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "inherit" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: prevLocation },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </CastList>
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/movies/:movieId/cast">{movie && <CastView />}</Route>
        <Route path="/movies/:movieId/reviews">{movie && <Reviews />}</Route>
      </Suspense>
    </>
  );
}

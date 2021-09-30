import { useParams, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import * as movieAPI from "../../services/movies-api";
import { IoIosArrowDropleft } from "react-icons/io";
import { Tooltip } from "../../componets/Tooltip/Tooltip";
import {
  CastList,
  MovieTitle,
  Score,
  Overview,
  Text,
  Genres,
  Info,
  MovieInfo,
  StyledNavLink,
  ScoreText,
  Wrapper,
  Button,
} from "./MovieDetailsView.styled";

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
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      {error && <h2>Sorry,there is no information about this film</h2>}
      {movie && (
        <Wrapper>
          <Button type="button" onClick={OnGoBack}>
            <IoIosArrowDropleft size={40} color={"inherit"} />
          </Button>

          <MovieInfo>
            <img
              style={{ marginRight: "20px" }}
              src={`${imageSRC}${movie.poster_path}`}
              alt={movie.title}
              width="220"
              height="300"
            />
            <div style={{ width: "480px" }}>
              <MovieTitle>{`${movie.title}${data(
                movie.release_date
              )}`}</MovieTitle>
              <Score>
                User score: <ScoreText>{movie.vote_average * 10}%</ScoreText>
              </Score>
              <Overview>Overview:</Overview>
              <Text>{movie.overview}</Text>
              <Genres>Genres:</Genres>
              <Text>{genres(movie.genres)}</Text>
              <Info>Additional information :</Info>
              <CastList>
                <li>
                  <Tooltip label="Click to see more information">
                    <StyledNavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "rgb(252, 151, 0)",
                      }}
                      to={{
                        pathname: `${url}/cast`,
                        state: { from: prevLocation },
                      }}
                    >
                      Cast
                    </StyledNavLink>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip label="Click to see more information">
                    <StyledNavLink
                      style={{ marginLeft: "5px" }}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "rgb(252, 151, 0)",
                      }}
                      to={{
                        pathname: `${url}/reviews`,
                        state: { from: prevLocation },
                      }}
                    >
                      Reviews
                    </StyledNavLink>
                  </Tooltip>
                </li>
              </CastList>
            </div>
          </MovieInfo>
        </Wrapper>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/movies/:movieId/cast">{movie && <CastView />}</Route>
        <Route path="/movies/:movieId/reviews">{movie && <Reviews />}</Route>
      </Suspense>
    </>
  );
}

import { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import * as movieAPI from "../../services/movies-api";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  MovieList,
  MovieItem,
  MovieImage,
  Title,
} from "../HomepageView/HomePageView.styled";
import noPoster from "../../images/no-poster.jpg";
const imageSRC = "https://image.tmdb.org/t/p/w500";

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const { url } = useRouteMatch();

  const [movies, setMovies] = useState(null);

  const SearchValue = new URLSearchParams(location.search).get("query") ?? "";

  const handleOnSubmitform = (value) => {
    history.push({
      ...location,
      search: `query=${value}`,
    });
  };
  // const onClick = (event) => {
  //   console.log(event.target.alt)
  // }

  useEffect(() => {
    if (!SearchValue) {
      return;
    }
    movieAPI.fetchMovieBySearchValue(SearchValue).then(setMovies);
  }, [SearchValue]);
  return (
    <>
      <SearchBar onSubmit={handleOnSubmitform}></SearchBar>
      {movies && (
        <MovieList>
          {movies.map((movie) => (
            <MovieItem key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MovieImage
                  // onClick={onClick}
                  src={
                    movie.poster_path
                      ? `${imageSRC}${movie.poster_path}`
                      : noPoster
                  }
                  alt={movie.name ?? movie.title}
                />
                <Title> {movie.title}</Title>
              </Link>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </>
  );
}

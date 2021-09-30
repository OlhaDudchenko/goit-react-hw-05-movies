import { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import * as movieAPI from "../../services/movies-api";
import { SearchBar } from "../SearchBar/SearchBar";
import { Button } from "../../componets/Button/Button";
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

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const SearchValue = new URLSearchParams(location.search).get("query") ?? "";

  const handleOnSubmitform = (value) => {
    history.push({
      ...location,
      search: `query=${value}`,
    });
  };

  useEffect(() => {
    if (!SearchValue) {
      return;
    }
    movieAPI.fetchMovieBySearchValue(SearchValue, page).then((data) => {
      setMovies((prevMovies) => [...prevMovies, ...data]);
    });
  }, [SearchValue, page]);

  const incrementPage = () => {
    setPage((prevState) => prevState + 1);
  };
  return (
    <>
      <SearchBar onSubmit={handleOnSubmitform}></SearchBar>
      {movies && (
        <>
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
          <Button page={page} onClick={incrementPage} />
        </>
      )}
    </>
  );
}

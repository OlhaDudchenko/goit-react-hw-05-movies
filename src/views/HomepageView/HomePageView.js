import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as movieAPI from "../../services/movies-api";
import {
  MovieList,
  MovieItem,
  MovieImage,
  Title,
  HomepageTitle,
} from "./HomePageView.styled";
import noPoster from "../../images/no-poster.jpg";
const imageSRC = "https://image.tmdb.org/t/p/w500";

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    movieAPI.fetchTrendingForToday().then(setMovies);
  }, []);

  //   console.log(movies);
  return (
    <>
      <HomepageTitle>Trending Today</HomepageTitle>

      {movies && (
        <MovieList>
          {movies.map((movie) => (
            <MovieItem key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MovieImage
                  src={
                    movie.poster_path
                      ? `${imageSRC}${movie.poster_path}`
                      : noPoster
                  }
                  alt={movie.name ?? movie.title}
                />
                <Title>{movie.name ?? movie.title}</Title>
              </Link>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </>
  );
}

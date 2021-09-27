import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as movieAPI from "../../services/movies-api";
import noImage from "../../images/noImage.jpg";
import { CastList } from "./MovieCastView.styled";
const imageSRC = "https://image.tmdb.org/t/p/w500";

export default function CastView() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    movieAPI.fetchCast(movieId).then(setCast);
  }, [movieId]);
  // console.log(cast)
  return (
    <>
      {cast && (
        <CastList>
          {cast.map((cast) => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `${imageSRC}${cast.profile_path}`
                    : noImage
                }
                alt={cast.name}
                width="140"
                height="180"
              />
              <p>{cast.original_name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </CastList>
      )}
    </>
  );
}

const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "0b4c9e96b3c484478ae1843759b93e8d";

function fetchMovie(url = "", config = {}, key = "") {
  return fetch(url, config, key).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Not found`));
  });
}

export function fetchTrendingForToday(page) {
  return fetchMovie(
    `${BASE_URL}/trending/all/day?api_key=${KEY}&page=${page}`
  ).then(({ results }) => {
    return results;
  });
}

export function fetchMovieBySearchValue(value, page) {
  return fetchMovie(`
${BASE_URL}/search/movie?api_key=${KEY}&query=${value}&language=en-US&page=${page}&include_adult=false`).then(
    ({ results }) => {
      return results;
    }
  );
}

export function fetchMovieById(movieId) {
  return fetchMovie(`
${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`).then((data) => {
    return data;
  });
}

export function fetchCast(movieId) {
  return fetchMovie(`
${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`).then(
    ({ cast }) => {
      return cast;
    }
  );
}

export function fetchReview(movieId) {
  return fetchMovie(`
${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1 `).then(
    ({ results }) => {
      return results;
    }
  );
}

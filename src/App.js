import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { SiteNav } from "./componets/SiteNav/SiteNav";
import "./App.css";

const HomePage = lazy(() =>
  import(
    "./views/HomepageView/HomePageView" /* webpackChunkName: "home-view" */
  )
);
const MoviesPage = lazy(() =>
  import(
    "./views/MoviePageView/MoviesPageView" /* webpackChunkName: "movie-view" */
  )
);
const NotFoundView = lazy(() =>
  import(
    "./views/NotFoundView/NotFoundView" /* webpackChunkName: "not-found-view" */
  )
);
const MovieDetailsView = lazy(() =>
  import(
    "./views/MovieDetailsView/MovieDetailsView" /* webpackChunkName: "movie-details-view" */
  )
);

export function App() {
  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <SiteNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

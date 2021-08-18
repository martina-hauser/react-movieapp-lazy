import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../components/header";
import { useFetch } from "../useFetch";

const HomeRoute = lazy(() => import("../routes/home-route"));
const CartRoute = lazy(() => import("../routes/cart-route"));
// check network tab, different chunks are loaded thanks to lazy
// possible to give names to chunks

export const App = ({ isLoading, movies, dispatch }) => {
  const { data, error } = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=d7fc424ee402bd0666f5f420c5201966&page=1&region=CH"
  );

  if (data?.results && movies.length === 0) {
    dispatch({ type: "load_movies_success", movies: data.results });
  }

  if (error && isLoading) {
    console.log(error);
    dispatch({ type: "set_is_loading", payload: false });
  }

  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading Route...</div>}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeRoute} />
            <Route path="/cart" component={CartRoute} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

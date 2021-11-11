import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Originals from "./components/Originals";
import Watchlist from "./components/Watchlist";
import MoviesPage from "./components/MoviesPage";
import Series from "./components/Series";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/originals">
            <Originals />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/moviespage">
            <MoviesPage />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/search">
            <Search />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import Header from "../Header/Header";
import MovieList from "../MovieList/MovieList";
import Divider from '../Divider/Divider';
import AddMovie from "../AddMovie/AddMovie";

import "./app.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <MovieList />
      <Divider />
      <AddMovie/>
    </div>
  );
};

export default App;

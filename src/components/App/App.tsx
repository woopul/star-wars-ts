import React from "react";
import Header from "../Header";
import MovieList from "../MovieList/MovieList";
import Divider from '../Divider/Divider';
import "./app.scss";
import AddMovie from "../AddMovie/AddMovie";

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

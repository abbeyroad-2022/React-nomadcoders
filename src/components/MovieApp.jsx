import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const MovieApp = () => {
  const [loading, setLoading] = useState(true);
  const [movieList, setmovieList] = useState([]);
  const getMovies = async () => {
    const json =  await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    ).json();
    setmovieList(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies()
  },[]);

  return (
    <div>
      <h1>Movie App {loading ? "": `(${movieList.length})`}</h1>
      {loading ? "Loading..." : movieList.map((i)=> <Movie coverImg={i.medium_cover_image} title={i.title} summary={i.summary} genres={i.genres} id={i.id} />)}
    </div>
  );
};

export default MovieApp;
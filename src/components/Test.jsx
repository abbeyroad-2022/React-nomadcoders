import React, { useState, useEffect } from 'react';


const Test = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies()
  }, [])
  return (
    <div>
      <h1>Movie App {loading ? "": `(${movies.length})`}</h1>
      {loading?"Loading...": movies.map(i=>(
        <div>
          <img src={i.medium_cover_image} alt="" />
          <h2>{i.title}</h2>
          <p>{i.summary}</p>
          <ul>
            {i.genres.map(item=>(
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Test;
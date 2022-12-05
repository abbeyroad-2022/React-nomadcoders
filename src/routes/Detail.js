import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const Detail = () => {
  const [movieInfo, setMovieInfo] = useState()
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie)
    console.log(movieInfo)
    setLoading(false)
  }
  useEffect(()=>{
    getMovie()
  }, [])
  return (
    <div>
      {loading ? "Loading..." : 
        <div>
          <h3>{movieInfo.title}</h3>
          <p>{movieInfo.description_full}</p>
          <img src={movieInfo.medium_cover_image} alt={movieInfo.title} />
        </div>
      }
    </div>
  );
};

export default Detail;
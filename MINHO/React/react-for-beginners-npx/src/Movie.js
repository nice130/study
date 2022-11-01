import { useEffect, useState } from "react";
import Detail from "./Detail.js";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  },[]);
  console.log(movies);
  return (
    <div>
      {
      loading ? (<h1>Loading...</h1>)
      : (
      <div>
        {movies.map((movie,idx)=> (
          <Detail 
            key={idx}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))}
        </div>
      )}
    </div>
  )

}

export default Movie;
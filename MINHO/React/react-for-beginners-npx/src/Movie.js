import { useEffect, useState } from "react";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    });
    
  },[]);
  console.log(movies);
  return (
    <div>
      {
      loading ? <h1>Loading...</h1> : null
      }
      
    </div>
  )

}

export default Movie;
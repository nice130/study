import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
function Detail(){
    const {id} = useParams();
    const [loading,setloading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            console.log(json.data.movie);
            setloading(false);
    };
    useEffect(()=>{
        getMovie();
    },[]);
    return (
        <div>{loading ? (<h1>Loading...</h1>) 
      :(
        <div>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <h2>
            {movie.title}
        </h2>
        <p>{movie.description_intro}</p>
        <ul>
        장르 : {movie.genres}
        </ul>
        <Link to={`/`}>메인으로</Link>
    </div> 
      )}
      </div>
    );
    
}

Detail.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Detail;
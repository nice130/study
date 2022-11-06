import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaChevronLeft } from "react-icons/fa";
import styles from "./../routes/Detail.module.css";
import Loading from "./../components/Loading";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading((cur) => !cur);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className={styles.detail__Container}>
        <div>
          <Link to={"/"} style={{ color: "black" }}>
            <FaChevronLeft className={styles.back__Icon} />
          </Link>
          <h1>{movie.title_long}</h1>
        </div>
        <img
          src={movie.medium_cover_image}
          alt={movie.title}
          className={styles.movie__Img}
        />
        <div style={{ margin: "10px" }}>
          {Array(parseInt(movie.rating))
            .fill(movie.rating)
            .map((_, idx) => (
              <FaStar color="gold" size={25} key={idx} />
            ))}
        </div>
        <h3>Genres: {movie.genres.join(", ")}</h3>
        <p>{movie.description_full}</p>
      </div>
      <img src={movie.background_image} className={styles.back__img}></img>
    </div>
  );
}
export default Detail;

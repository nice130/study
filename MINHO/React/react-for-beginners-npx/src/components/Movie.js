import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
function Movie({coverImg, title,summary,genres}) {
  console.log(title)
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g,idx) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
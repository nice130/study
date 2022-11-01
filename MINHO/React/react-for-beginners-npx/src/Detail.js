function Detail({coverImg, title,summary,genres}) {
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

export default Detail;
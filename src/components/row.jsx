import './Row.css';

export default function Row({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      
      <div className="row__posters">
        {movies.map(movie => (
          <div key={movie.id} className="row__poster-container">
            <img 
              className="row__poster" 
              src={movie.image} 
              alt={movie.title} 
            />
            <div className="row__hover-overlay">
              <span className="play-icon">▶</span>
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ moviesList }) => {
  return (
    <Fragment>
      {moviesList !== null ? (
        moviesList.map((movie, i) => (
          <div
            className="card-container"
            key={movie.id + i + movie.vote_average + new Date()}
          >
            <Link to={`/${movie.id}`}>
              <div className="card-container__rating">
                <span>{movie.vote_average}</span>
              </div>
              <div className="card-container__img">
                {movie.backdrop_path && movie.backdrop_path.status !== 500 ? (
                  <img
                    onError={e =>
                      (e.target.src = "https://i.imgur.com/U69zau9.jpg")
                    }
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path} `}
                    alt={`{${movie.title}}`}
                  />
                ) : (
                  <img src={`https://i.imgur.com/U69zau9.jpg`} alt="Error" />
                )}
              </div>
              <div className="card-container__text">
                <h1>
                  {movie.title} ({movie.release_date.slice(0, 4)})
                </h1>
                <p>Language: {movie.original_language}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Fragment>
  );
};

export default Card;

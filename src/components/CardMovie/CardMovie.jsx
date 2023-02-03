import React from "react";
import ButtonPlay from "./ButtonPlay/ButtonPlay";
import Star from "../../assets/img/Star.png";
import  "./CardMovie.scss";

function CardMovie({ title, img, ranking, year, myMovie = false }) {
  const urlImg = myMovie ? img : `https://image.tmdb.org/t/p/original/${img}`;
  return (
    <div className='card-movie-container' style={{ backgroundImage: `url(${urlImg})` }}>
      <div className='play-button'>
        <ButtonPlay />
      </div>
      <h4 className='movie-title'>{title}</h4>
      <div className='hover-info'>
        {ranking ? (
          <div>
            <img src={Star} alt="star" />
            <h5>{ranking}</h5>
          </div>
        ) : null}
        {year ? <h5>{year}</h5> : null}
      </div>
    </div>
  );
}

export default CardMovie;

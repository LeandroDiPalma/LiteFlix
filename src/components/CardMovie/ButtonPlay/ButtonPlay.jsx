import React, { useState } from "react";
import playNormal from "../../../assets/img/play.png";
import playBlack from "../../../assets/img/playblack.png";
import  "./ButtonPlay.scss";

function ButtonPlay() {
  const [img, setImg] = useState(playNormal);

  const handleOver = () => {
    setImg(playBlack);
  };

  const handleOut = () => {
    setImg(playNormal);
  };

  return (
    <div
      className="button-play-container"
      onMouseOver={handleOver}
      onMouseOut={handleOut}
    >
      <img src={img} alt="play" />
    </div>
  );
}

export default ButtonPlay;

import { FilmInformation } from '../../types/filmInformation';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import React from 'react';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';

type Props = {
  film: FilmInformation;
};

const SmallFilmCard = ({ film }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusedLongEnough, setisFocusedLongEnougI] = useState(false);
  useEffect(() => {
    // run a delayed script that will check if the component is hovered for 5s than set `isFocusedLongEnough` to true
    if (isHovered) {
      const timeout = setTimeout(() => {
        setisFocusedLongEnougI(true);
      }, 1000); // 1 second

      return () => clearTimeout(timeout);
    } else {
      setisFocusedLongEnougI(false);
    }
  }, [isHovered]);
  const onPointerEnter = () => {
    // mark component as hovered
    setIsHovered(true);
  };

  const onPointerLeave = () => {
    // reset the state to normal
    setIsHovered(false);
  };
  const imgTag = (
    <img src={film.PreviewCover} alt={film.filmName} width="280" height="175" />
  );
  return (
    <article
      className="small-film-card catalog__films-card"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className="small-film-card__image">
        {isFocusedLongEnough ? <VideoPlayer filmSrc={film.video} /> : imgTag}
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">
          {film.filmName}
        </Link>
      </h3>
    </article>
  );
};

export default SmallFilmCard;

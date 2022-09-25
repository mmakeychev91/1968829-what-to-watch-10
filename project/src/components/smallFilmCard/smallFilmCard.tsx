import { FilmInformation } from '../../types/filmInformation';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type Props = {
  films: FilmInformation[];
  filmNumber: number;
};

const SmallFilmCard = ({
  films,
  filmNumber,
}: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const imgTag = (
    <img
      src={films[filmNumber].PreviewCover}
      alt={films[filmNumber].filmName}
      width="280"
      height="175"
    />
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const videoTag = (
    <video
      src={films[filmNumber].video}
      autoPlay
      muted
      width="280"
      height="175"
    >
    </video>
  );
  return (
    <article
      className="small-film-card catalog__films-card"
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="small-film-card__image">{(isHovered === true ? videoTag : imgTag)}</div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">
          {films[filmNumber].filmName}
        </ Link>
      </h3>
    </article>
  );
};

export default SmallFilmCard;

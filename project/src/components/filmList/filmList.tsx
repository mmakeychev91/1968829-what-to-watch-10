import SmallFilmCard from '../../components/smallFilmCard/smallFilmCard';
import { v4 as uuidv4 } from 'uuid';
import { FilmInformation } from '../../types/filmInformation';
import React from 'react';

type Props = {
  films: FilmInformation[],
  renderingFilmQuantity: number,
};

const renderFilmCards = (
  filmCardAmountPerStep: number,
  films: FilmInformation[],
) => {
  const filmCardsItems: Array<JSX.Element> = [];
  for (let i = 0; i < filmCardAmountPerStep; i++) {
    filmCardsItems.push(
      <SmallFilmCard
        key={uuidv4()}
        film={films[i]}
      />
    );
  }
  return filmCardsItems;
};

const FilmList = ({
  films,
  renderingFilmQuantity
}: Props): JSX.Element => (
  <div className="catalog__films-list">
    {renderFilmCards(renderingFilmQuantity, films)}
  </div>
);

export default FilmList;

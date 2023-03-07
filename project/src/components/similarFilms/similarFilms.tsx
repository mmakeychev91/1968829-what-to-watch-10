import SmallFilmCard from '../../components/smallFilmCard/smallFilmCard';

import { FilmInformation } from '../../types/filmInformation';
import React from 'react';

type Props = {
  films: FilmInformation[];
  renderingFilmQuantity: number;
  genre: string;
  id: string;
};

const renderSimilarFilmCards = (
  filmCardAmountPerStep: number,
  films: FilmInformation[],
  genre: string,
  id: string,
) => {
  const MAX_COUNT = filmCardAmountPerStep;
  const filmCardsItems: Array<JSX.Element> = [];
  for (let i = 0; i < films.length; i++) {
    const element = <SmallFilmCard key={films[i].id} film={films[i]} />;
    if (films[i].genre === genre && films[i].id !== id) {
      filmCardsItems.push(element);
      if (filmCardsItems.length === MAX_COUNT) {
        break;
      }
    }
  }
  return filmCardsItems;
};

const SimilarFilms = ({
  films,
  renderingFilmQuantity,
  genre,
  id,
}: Props): JSX.Element => (
  <div className="catalog__films-list">
    {renderSimilarFilmCards(renderingFilmQuantity, films, genre, id)}
  </div>
);

export default SimilarFilms;

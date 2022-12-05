import SmallFilmCard from '../../components/smallFilmCard/smallFilmCard';
import { v4 as uuidv4 } from 'uuid';
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
  const filmCardsItems: Array<JSX.Element> = [];
  for (let i = 0; i < films.length; i++) {
    if (films[i].genre === genre && films[i].id !== id) {
      filmCardsItems.push(<SmallFilmCard key={uuidv4()} film={films[i]} />);
    }
  }
  filmCardsItems.length = 4;
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

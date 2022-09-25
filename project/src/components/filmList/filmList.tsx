import SmallFilmCard from '../../components/smallFilmCard/smallFilmCard';
import { v4 as uuidv4 } from 'uuid';
import { FilmInformation } from '../../types/filmInformation';

type Props = {
  films: FilmInformation[],
  renderingFilmQuantity: number,
};

const renderFilmCards = (
  filmCardAmountPerStep: number,
  films: FilmInformation[],
) => {
  const filmCardsItems = [];
  for (let i = 0; i < filmCardAmountPerStep; i++) {
    filmCardsItems.push(
      <SmallFilmCard
        filmNumber={i}
        key={uuidv4()}
        films={films}
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

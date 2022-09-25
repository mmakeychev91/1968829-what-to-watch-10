import { FilmInformation } from '../../types/filmInformation';
import { RenderingFilmQuantity } from '../../types/renderingFilmQuantity';
import FilmList from '../../components/filmList/filmList';
import UserBlock from '../../components/userBlock/userBlock';
import PlayButton from '../../components/playButton/playButton';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

type Props = {
  films: FilmInformation[],
  renderingFilmQuantity: RenderingFilmQuantity[];
};

const MainScreen = ({
  films,
  renderingFilmQuantity
}: Props): JSX.Element => (
  <>
    <section className="film-card">
      <div className="film-card__bg">
        <img src={films[1].bigPoster} alt={films[1].filmName} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo isLink={false} isLinkLight={false} />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={films[1].MovieСover}
              alt={films[1].filmName}
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{films[1].filmName}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{films[1].genre}</span>
              <span className="film-card__year">{films[1].releaseDate}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton/>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">
              All genres
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Comedies
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Crime
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Documentary
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Dramas
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Horror
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Kids & Family
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Romance
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Sci-Fi
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Thrillers
            </a>
          </li>
        </ul>

        <FilmList
          films={films}
          renderingFilmQuantity={renderingFilmQuantity[0].itemsPer}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default MainScreen;

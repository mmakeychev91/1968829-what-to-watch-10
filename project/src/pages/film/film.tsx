import { FilmInformation } from '../../types/filmInformation';
import { Details } from '../../types/details';
import { Overview } from '../../types/overview';
import { Review } from '../../types/review';
import { ItemsPerPage} from '../../types/itemsPerPage';
import UserBlock from '../../components/userBlock/userBlock';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import PlayButton from '../../components/playButton/playButton';
import Footer from '../../components/footer/footer';
import React from 'react';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import SimilarFilms from '../../components/similarFilms/similarFilms';
import { ITEMS_PER_PAGE } from './../../const';

type Props = {
  films: FilmInformation[];
  film: FilmInformation;
  filmDetails: Details;
  overviews: Overview;
  reviews: Review[];
  itemsPerPage: ItemsPerPage;
};

const Film = ({
  film,
  films,
  filmDetails,
  overviews,
  reviews,
  itemsPerPage,
}: Props): JSX.Element => (
  <>
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.bigPoster} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isLink isLinkLight={false} />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.releaseDate}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton />
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
              <Link to={AppRoute.AddReview} className="btn film-card__button">
                Add review
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img
              src={film.movieСover}
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>
          <Tabs overviews={overviews} filmDetails={filmDetails} reviews={reviews} />


        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <SimilarFilms id={film.id} genre={film.genre} films={films} renderingFilmQuantity={ITEMS_PER_PAGE.Detail} />
      </section>
      <Footer />
    </div>
  </>
);

export default Film;

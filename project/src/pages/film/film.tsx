import { FilmInformation } from '../../types/filmInformation';
import { Details } from '../../types/details';
import { Overview } from '../../types/overview';
import { Review } from '../../types/review';
import FilmList from '../../components/filmList/filmList';
import { ItemsPerPage } from '../../types/itemsPerPage';
import UserBlock from '../../components/userBlock/userBlock';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import PlayButton from '../../components/playButton/playButton';
import Footer from '../../components/footer/footer';
import React from 'react';

type Props = {
  films: FilmInformation[];
  filmDetails: Details[];
  overviews: Overview[];
  reviews: Review[];
  itemsPerPage: ItemsPerPage;
};

const Film = ({ films, filmDetails, overviews, reviews, itemsPerPage }: Props): JSX.Element => (
  <>
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img
            src={films[3].bigPoster}
            alt={films[3].filmName}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{films[3].filmName}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{films[3].genre}</span>
              <span className="film-card__year">{films[3].releaseDate}</span>
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
              src={films[3].MovieСover}
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">
                    Overview
                  </a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">
                    Details
                  </a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">
                    Reviews
                  </a>
                </li>
              </ul>
            </nav>

            <div className="film-rating">
              <div className="film-rating__score">{new Intl.NumberFormat().format(overviews[3].raiting)}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">Very good</span>
                <span className="film-rating__count">240 ratings</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>
                {overviews[3].discription}
              </p>

              <p className="film-card__director">
                <strong>Director: {overviews[3].director}</strong>
              </p>

              <p className="film-card__starring">
                <strong>
                  Starring: {overviews[3].starring} and other
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmList
          films={films}
          renderingFilmQuantity={itemsPerPage.Detail}
        />
      </section>
      <Footer/>
    </div>
  </>
);

export default Film;

import { FilmInformation } from '../../types/filmInformation';
import UserBlock from '../../components/userBlock/userBlock';
import Logo from '../../components/logo/logo';
import CommentSubmissionForm from '../../components/commentSubmissionForm/commentSubmissionForm';
import React from 'react';

type Props = {
  film: FilmInformation;
};

const AddReview = ({ film }: Props): JSX.Element => (
  <section className="film-card film-card--full">
    <div className="film-card__header">
      <div className="film-card__bg">
        <img src={film.bigPoster} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo isLink isLinkLight={false} />

        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="film-page.html" className="breadcrumbs__link">
                {film.name}
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
        <UserBlock />
      </header>

      <div className="film-card__poster film-card__poster--small">
        <img
          src={film.movieСover}
          alt={film.name}
          width="218"
          height="327"
        />
      </div>
    </div>

    <div className="add-review">
      <CommentSubmissionForm/>
    </div>
  </section>
);

export default AddReview;

import React from 'react';
import { Details } from '../../types/details';
import { Overview } from '../../types/overview';
import { Review } from '../../types/review';
import ReviewList from '../reviewRow/reviewRow';

type Props = {
  filmDetails: Details;
  overviews: Overview;
  reviews: Review[];
  tab: string;
};

const TabsContent = ({
  filmDetails,
  overviews,
  reviews,
  tab,
}: Props): JSX.Element => {
  const overviewMarkup = (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {new Intl.NumberFormat().format(overviews.raiting)}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{overviews.discription}</p>

        <p className="film-card__director">
          <strong>Director: {overviews.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {overviews.starring} and other</strong>
        </p>
      </div>
    </>
  );

  const detailMurkup = (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">
            {filmDetails.director}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {filmDetails.starring}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {filmDetails.runTime}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">
            {filmDetails.genre}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">
            {filmDetails.releaseDate}
          </span>
        </p>
      </div>
    </div>
  );
  if (tab === 'overview') {
    return overviewMarkup;
  } else if (tab === 'detail') {
    return detailMurkup;
  } else if (tab === 'review') {
    return <ReviewList reviews={reviews} />;
  } else {
    return overviewMarkup;
  }
};

export default TabsContent;

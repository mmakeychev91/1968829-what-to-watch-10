/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Details } from '../../types/details';
import { Overview } from '../../types/overview';
import { Review } from '../../types/review';
import dayjs from 'dayjs';

type Props = {
  filmDetails: Details[];
  overviews: Overview[];
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
          {new Intl.NumberFormat().format(overviews[3].raiting)}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{overviews[3].discription}</p>

        <p className="film-card__director">
          <strong>Director: {overviews[3].director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {overviews[3].starring} and other</strong>
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
            {filmDetails[3].director}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {filmDetails[3].starring}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {filmDetails[3].runTime}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">
            {filmDetails[3].genre}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">
            {filmDetails[3].releaseDate}
          </span>
        </p>
      </div>
    </div>
  );
  const reviewMarkup = (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[0].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[0].name}</cite>
              <time className="review__date" dateTime={reviews[0].date}>
                {dayjs(reviews[0].date).format('MMMM YY, YYYY')}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[0].rating}</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[1].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[1].name}</cite>
              <time className="review__date" dateTime={reviews[1].date}>
                {dayjs(reviews[1].date).format('MMMM YY, YYYY')}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[1].rating}</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[2].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[2].name}</cite>
              <time className="review__date" dateTime={reviews[2].date}>
                {dayjs(reviews[2].date).format('MMMM YY, YYYY')}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[2].rating}</div>
        </div>
      </div>
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[3].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[3].name}</cite>
              <time className="review__date" dateTime={reviews[3].date}>
                {dayjs(reviews[3].date).format('MMMM YY, YYYY')}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[3].rating}</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[4].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[4].name}</cite>
              <time className="review__date" dateTime={reviews[4].date}>
                {dayjs(reviews[4].date).format('MMMM YY, YYYY')}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[4].rating}</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[5].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[5].name}</cite>
              <time className="review__date" dateTime={reviews[5].date}>
                {dayjs(reviews[5].date).format('MMMM YY, YYYY')}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[5].rating}</div>
        </div>
      </div>
    </div>
  );
  if (tab === 'overview') {
    return overviewMarkup;
  } else if (tab === 'detail') {
    return detailMurkup;
  } else if (tab === 'review') {
    return reviewMarkup;
  } else {
    return overviewMarkup;
  }
};

export default TabsContent;

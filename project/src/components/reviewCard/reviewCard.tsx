import dayjs from 'dayjs';
import React from 'react';
import { Review } from '../../types/review';

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props): JSX.Element => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review.text}</p>
      <footer className="review__details">
        <cite className="review__author">{review.name}</cite>
        <time className="review__date" dateTime={review.date}>
          {dayjs(review.date).format('MMMM YY, YYYY')}
        </time>
      </footer>
    </blockquote>
    <div className="review__rating">{review.rating}</div>
  </div>
);

export default ReviewCard;

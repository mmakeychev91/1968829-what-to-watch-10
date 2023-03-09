import { Review } from '../../types/review';
import React from 'react';
import ReviewCard from '../../components/reviewCard/reviewCard';

type Props = {
  reviews: Review[];
};

const renderReviewList = (
  reviews: Review[],
  isCardEven: boolean,
) => {
  const reviewlistItems: Array<JSX.Element> = [];
  for (let i = (isCardEven ? 0 : 1); i < reviews.length; i += 2) {
    reviewlistItems.push(<ReviewCard key={reviews[i].id} review={reviews[i]} />);
  }
  return reviewlistItems;
};

const ReviewRow = ({ reviews }: Props): JSX.Element => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      {renderReviewList(reviews, true)}
    </div>
    <div className="film-card__reviews-col">
      {renderReviewList(reviews, false)}
    </div>
  </div>
);

export default ReviewRow;

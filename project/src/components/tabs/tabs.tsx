/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Details } from '../../types/details';
import { Overview } from '../../types/overview';
import { Review } from '../../types/review';
import { useState } from 'react';
import TabsContent from '../tabsContent/tabsContent';

type Props = {
  filmDetails: Details[];
  overviews: Overview[];
  reviews: Review[];
};

const Tabs = ({ filmDetails, overviews, reviews }: Props): JSX.Element => {
  const [tab, setTab] = useState('overview');
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={tab === 'overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a
              onClick={(evt) => {
                setTab('overview');
              }}
              className="film-nav__link"
            >
              Overview
            </a>
          </li>
          <li className={tab === 'detail' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a
              onClick={(evt) => {
                setTab('detail');
              }}
              className="film-nav__link"
            >
              Details
            </a>
          </li>
          <li className={tab === 'review' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a
              onClick={(evt) => {
                setTab('review');
              }}
              className="film-nav__link"
            >
              Reviews
            </a>
          </li>
        </ul>
      </nav>
      <TabsContent
        filmDetails={filmDetails}
        overviews={overviews}
        reviews={reviews}
        tab={tab}
      />
    </div>
  );
};

export default Tabs;

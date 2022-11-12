import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  isLink: boolean;
  isLinkLight: boolean;
};

const Logo = ({ isLink, isLinkLight }: Props): JSX.Element => {
  const chooseLinkClass = () => (isLinkLight === true ? 'logo__link logo__link--light' : 'logo__link');
  return (
    <div className="logo">
      {isLink === true ? (
        <Link
          to={AppRoute.Main}
          className={chooseLinkClass()}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      ) : (
        <span
          className={
            chooseLinkClass()
          }
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </span>
      )}
    </div>
  );
};

export default Logo;

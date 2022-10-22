import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const PlayButton = (): JSX.Element => (
  <Link to={AppRoute.Player} className="btn btn--play film-card__button">
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </Link>
);

export default PlayButton;

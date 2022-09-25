import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const UserBlock = (): JSX.Element => (
  <ul className="user-block">
    <li className="user-block__item">
      <Link to={AppRoute.MyList}>
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </Link>
    </li>
    <li className="user-block__item">
      <a className="user-block__link">Sign out</a>
    </li>
  </ul>
);

export default UserBlock;

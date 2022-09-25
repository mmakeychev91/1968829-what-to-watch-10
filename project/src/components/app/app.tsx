import MainScreen from '../../pages/mainScreen/mainScreen';
import AddReview from '../../pages/addReview/addReview';
import ErrorPage from '../../pages/errorPage/errorPage';
import Film from '../../pages/film/film';
import MyList from '../../pages/myList/myList';
import Player from '../../pages/player/player';
import SignIn from '../../pages/signIn/signIn';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Details } from '../../types/details';
import { FilmInformation } from '../../types/filmInformation';
import { Overview } from '../../types/overview';
import { Review } from '../../types/review';
import { RenderingFilmQuantity } from '../../types/renderingFilmQuantity';

type Props = {
  filmDetails: Details[];
  films: FilmInformation[];
  overviews: Overview[];
  reviews: Review[];
  renderingFilmQuantity: RenderingFilmQuantity[];
};

const App = ({
  filmDetails,
  films,
  overviews,
  reviews,
  renderingFilmQuantity,
}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={
          <MainScreen
            films={films}
            renderingFilmQuantity={renderingFilmQuantity}
          />
        }
      />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList
              films={films}
              renderingFilmQuantity={renderingFilmQuantity}
            />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Film} element={
        <Film
          films={films}
          filmDetails={filmDetails}
          overviews={overviews}
          reviews={reviews}
          renderingFilmQuantity={renderingFilmQuantity}
        />
      }
      />
      <Route
        path={AppRoute.AddReview}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReview
              films={films}
            />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Player} element={
        <Player
          films={films}
        />
      }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

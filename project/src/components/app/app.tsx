import MainScreen from '../../pages/mainScreen/mainScreen';
import AddReview from '../../pages/addReview/addReview';
import ErrorPage from '../../pages/errorPage/errorPage';
import Film from '../../pages/film/film';
import MyList from '../../pages/myList/myList';
import Player from '../../pages/player/player';
import SignIn from '../../pages/signIn/signIn';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

export type FilmCard = {
  filmName: string;
  filmGenre: string;
  filmReliseDate: number;
};

const mockedFilmCard: FilmCard = {
  filmName: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  filmReliseDate: 2014,
};

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen filmCard={mockedFilmCard} />}
      />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Film} element={<Film />} />
      <Route
        path={AppRoute.AddReview}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <AddReview />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Player} element={<Player />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

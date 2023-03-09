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
import { Details } from '../../types/details';
import { FilmInformation } from '../../types/filmInformation';
import { Overview } from '../../types/overview';
import { Review } from '../../types/review';
import { ItemsPerPage } from '../../types/itemsPerPage';
import React from 'react';

type Props = {
  filmDetails: Details[];
  films: FilmInformation[];
  overviews: Overview[];
  reviews: Array<Array<Review>>;
  itemsPerPage: ItemsPerPage;
};

const App = ({
  filmDetails,
  films,
  overviews,
  reviews,
  itemsPerPage,
}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen film={films[4]} films={films} itemsPerPage={itemsPerPage} />}
      />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList films={films} itemsPerPage={itemsPerPage} />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Film}
        element={
          <Film
            films={films}
            film={films[4]}
            filmDetails={filmDetails[4]}
            overviews={overviews[4]}
            reviews={reviews[4]}
            itemsPerPage={itemsPerPage}
          />
        }
      />
      <Route
        path={AppRoute.AddReview}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReview film={films[4]} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Player} element={<Player film={films[4]} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

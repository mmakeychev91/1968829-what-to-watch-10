import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmDetails } from './mocks/filmDetails';
import { films } from './mocks/films';
import { overviews } from './mocks/overviews';
import { reviews } from './mocks/reviews';
import { renderingFilmQuantity } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    filmDetails={filmDetails}
    films={films}
    overviews={overviews}
    reviews={reviews}
    renderingFilmQuantity={renderingFilmQuantity}
  />
);

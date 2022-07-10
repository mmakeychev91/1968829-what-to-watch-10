import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  FILM_CARDS_AMOUNT_PER_STEP: 20,
};

const filmCardsData = {
  filmName: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  filmReliseDate: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmCardAmountPerStep={Setting.FILM_CARDS_AMOUNT_PER_STEP}
      filmName={filmCardsData.filmName}
      filmGenre={filmCardsData.filmGenre}
      filmReliseDate={filmCardsData.filmReliseDate}
    />
  </React.StrictMode>
);

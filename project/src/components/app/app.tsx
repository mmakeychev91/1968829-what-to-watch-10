import MainScreen from '../../pages/mainScreen/mainScreen';

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
  <MainScreen filmCard={mockedFilmCard}/>
);

export default App;

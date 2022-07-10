import MainScreen from '../../pages/mainScreen/mainScreen';

type AppScreenProps = {
  filmCardAmountPerStep: number;
  filmName: string;
  filmGenre: string;
  filmReliseDate: number;
};

function App({
  filmCardAmountPerStep,
  filmName,
  filmGenre,
  filmReliseDate,
}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      filmCardAmountPerStep={filmCardAmountPerStep}
      filmName={filmName}
      filmGenre={filmGenre}
      filmReliseDate={filmReliseDate}
    />
  );
}

export default App;

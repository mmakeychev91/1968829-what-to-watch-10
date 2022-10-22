import { FilmInformation } from '../../types/filmInformation';
import { ItemsPerPage } from '../../types/itemsPerPage';
import FilmList from '../../components/filmList/filmList';
import UserBlock from '../../components/userBlock/userBlock';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

type Props = {
  films: FilmInformation[],
  itemsPerPage: ItemsPerPage;
};

const MyList = ({
  films,
  itemsPerPage
}: Props): JSX.Element => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo isLink isLinkLight={false} />

      <h1 className="page-title user-page__title">
        My list <span className="user-page__film-count">9</span>
      </h1>
      <UserBlock />
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmList
        films={films}
        renderingFilmQuantity={itemsPerPage.Page}
      />
    </section>
    <Footer />
  </div>
);

export default MyList;

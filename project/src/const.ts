import { RenderingFilmQuantity } from './types/renderingFilmQuantity';

const ITEMS_PER_PAGE = 8;
const ITEMS_PER_FILM_DETAIL = 4;

export const renderingFilmQuantity: RenderingFilmQuantity[] = [
  {
    itemsPer: ITEMS_PER_PAGE,
  },
  {
    itemsPer: ITEMS_PER_FILM_DETAIL,
  }
];

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

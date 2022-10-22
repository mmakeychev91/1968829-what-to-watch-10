import { ItemsPerPage } from './types/itemsPerPage';

export const ITEMS_PER_PAGE: ItemsPerPage = Object.freeze({
  Page: 8,
  Detail: 4,
});

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

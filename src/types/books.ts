export interface ILibraryState {
  books: IBook[];
  loaded: boolean;
  error: undefined | string;
  genres: string[];
}
export interface IBook {
  id: string;
  name: string;
  author: string;
  genre: string;
  banner: string
  wish: boolean
}

export interface IAddBook extends Omit<IBook, 'id'> {
}


export interface IError {
  name: string;
  author: string;
  genre: string;
  banner: string
}

export enum BooksActionType {
  FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
  FETCH_BOOKS = 'FETCH_BOOKS',
}

type ActionsBooksFetchSuccess = {
  type: BooksActionType.FETCH_BOOKS_SUCCESS,
  payload: IBook[],
}
type ActionsBooksFetchError = {
  type: BooksActionType.FETCH_BOOKS_ERROR,
  payload: string,
}
type ActionsBooksFetch = {
  type: BooksActionType.FETCH_BOOKS,
  payload: boolean,
}

export interface IFilter {
  genre: string;
  sort: string;
}
export type BooksAction = ActionsBooksFetchSuccess | ActionsBooksFetchError | ActionsBooksFetch;
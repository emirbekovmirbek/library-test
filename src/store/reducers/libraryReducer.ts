import {BooksAction, BooksActionType, ILibraryState} from '../../types/books';

const genres = [
  '',
  'Фэнтези',
  'Роман',
  'Психология',
  'Детектив',
  'Приключения',
  'Проза',
  'Бизнес-литература',
  'Психология',
  'История',
]
const initialState :ILibraryState = {
  books: [],
  loaded: false,
  error: undefined,
  genres: genres,
}
export const libraryReducer = (state = initialState, action: BooksAction):ILibraryState =>  {
  switch (action.type) {
    case BooksActionType.FETCH_BOOKS_SUCCESS:
      return {...state, books: action.payload, loaded: true};
    case BooksActionType.FETCH_BOOKS_ERROR:
      return {...state, error: action.payload, loaded: true};
    case BooksActionType.FETCH_BOOKS:
      return {...state, loaded: action.payload}
    default:
      return state
  }
};
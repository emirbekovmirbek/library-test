import {Dispatch} from "redux";
import {BooksAction, BooksActionType, IAddBook, IBook} from '../../types/books';
import {addDoc, collection, doc, getDocs, updateDoc} from 'firebase/firestore';
import {db} from '../../ts/firebase';

const booksCollection = collection(db, 'books');
export const fetchBooks = () => {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      const response = await getDocs(booksCollection);
      const data: IBook[] = response.docs.map((doc) => {
        const {name, banner, author, genre , wish} = doc.data();
        const res: IBook = {name, banner, author, genre, id: doc.id, wish};
        return res;
      })
      dispatch({type: BooksActionType.FETCH_BOOKS_SUCCESS, payload: data});
    } catch (e) {
      dispatch({type: BooksActionType.FETCH_BOOKS_ERROR, payload: 'не правильный запрос'});
    }
  };
};

export const addBook = (newBook: IAddBook) => {
  return async (dispatch: Dispatch<BooksAction>) => {
    dispatch({type: BooksActionType.FETCH_BOOKS, payload: false});
    try {
      await addDoc(booksCollection, newBook);
    } catch (e) {
      dispatch({type: BooksActionType.FETCH_BOOKS_ERROR, payload: 'книга не добавлена'});
    }
  };
};

export const changeBook = (newDataBook: IAddBook, id: string) => {
  return async (dispatch: Dispatch<BooksAction>) => {
    dispatch({type: BooksActionType.FETCH_BOOKS, payload: false});
    const bookDoc = doc(db, 'books', id)
    try {
      await updateDoc(bookDoc, newDataBook);
    } catch (e) {
      dispatch({type: BooksActionType.FETCH_BOOKS_ERROR, payload: 'Книга не изменена'});
    }
  };
};
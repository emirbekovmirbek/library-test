import React from 'react';
import './card.scss'
import {IAddBook, IBook} from '../../../types/books';
import {useNavigate} from 'react-router-dom';
import {useAction} from '../../../hooks/useActions';
import {fetchBooks} from '../../../store/action-creater/books';

type PropsType = {
  book: IBook
};
const Card : React.FC <PropsType>= ({book}) => {
  const {changeBook, fetchBooks} = useAction();
  const navigate = useNavigate();
  const handleClick = ()  => {
    const changedBook: IAddBook = {
      wish: !book.wish,
      name: book.name,
      author: book.author,
      genre: book.genre,
      banner: book.banner
    };
    changeBook(changedBook, book.id);
    fetchBooks();
  };
  return (
    <div className="card">
      <div className="card__image">
        <img src={book.banner} alt="Book banner"/>
        <span
          className={`card__star ${book.wish && 'card__star--active'}`}
          onClick={handleClick}
        >&#9733;</span>
      </div>
      <div className="card__info">
        <p className="card__name">{book.name}</p>
        <p className="card__author">{book.author}</p>
        <p className="card__genre">{book.genre}</p>
      </div>
      <button className="card__action" onClick={() => navigate(`book/${book.id}`)}>Изменить</button>
    </div>
  );
};

export default Card;
import React from 'react';
import Card from '../card/Card';
import './list.scss'
import Loader from '../loader/Loader';
import {IBook} from '../../../types/books';

type PropsType = {
  books: IBook[];
  loaded: boolean;
}
const ListCard: React.FC<PropsType> = ({loaded, books}) => {
  return (
    <div className="list">
      {books.length !== 0
        ?
        <div className="list__cards">
          {books.map(item => <Card key={item.id} book={item}/>)}
        </div>
        : loaded && <h2 className="list__info">Текущем разделе пока нет книг</h2>
      }
      <Loader loading={!loaded}/>
    </div>
  );
};

export default ListCard;
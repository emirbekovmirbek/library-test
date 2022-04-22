import React from 'react';
import './wishlist.scss'
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';

const WishList: React.FC = () => {
  const {books, loaded} = useTypedSelector(state => state.library);
  const wishBooks = React.useMemo(() => {
    return books.filter((books) => books.wish)
  }, [books])
  return (
    <div className="wish-list container">
      {wishBooks.length
        ? <div className="wish-list__cards">
          {wishBooks.map((item) => <Card book={item} key={item.id}/>)}
        </div>
        : <h2 className="wish-list__information">
          Добавьте желамые книги
        </h2>
      }
      <Loader loading={!loaded}/>
    </div>
  );
};

export default WishList
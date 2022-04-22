import React from 'react';
import './main.scss'
import ListCard from '../../components/list/ListCard';
import FormAddBook from '../../components/addbook/FormAddBook';
import Filter from '../../components/filter/Filter';
import {IFilter} from '../../../types/books';
import {useAction} from '../../../hooks/useActions';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {useBooksFilter} from '../../../hooks/useBooksFilter';

const Main: React.FC = () => {
  const [isPopup, setIsPopup] = React.useState<boolean>(false);
  const [filter, setFilter] = React.useState<IFilter>({
    genre: '',
    sort: 'name',
  })
  const {fetchBooks} = useAction();
  const {books, loaded} = useTypedSelector((state) => state.library)
  React.useEffect(() => {
    fetchBooks();
  },[]);
  const handleChange = (name: string, value: string) => {
    setFilter((prev) => ({
      ...prev,
      [name]: value
    }))
  };
  const booksList = useBooksFilter(books, filter);
  return (
    <div className="main container">
      <FormAddBook isShown={isPopup} handleChange={(value) => setIsPopup(value)}/>
      <Filter value={filter} onChange={handleChange}>
        <p className="main__count">Количество книг: {booksList.length}</p>
        <button className="main__btn" onClick={() => setIsPopup(!isPopup)}>Добавить книгу</button>
      </Filter>
      <ListCard books={booksList} loaded={loaded}/>
    </div>
  );
};

export default Main;
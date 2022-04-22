import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore';
import {IAddBook} from '../../../types/books';
import {db} from '../../../ts/firebase';
import Form from '../../components/form/Form';
import {useAction} from '../../../hooks/useActions';
import Loader from '../../components/loader/Loader';

type TypeParams = {
  id: string;
}
const ChangeBook: React.FC = () => {
  const {id} = useParams<TypeParams>();
  const [book, setBook] = React.useState<IAddBook>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const getBook = async () => {
    const bookRef = doc(db, `books/${id}`)
    const response = await getDoc(bookRef);
    const res = response.data();
    const data: IAddBook = {
      genre: res?.genre,
      banner: res?.banner,
      author: res?.author,
      wish: res?.wish,
      name: res?.name
    }
    setBook(data);
    setLoading(false);
  };
  React.useEffect(() => {
    getBook();
  }, []);
  const {changeBook} = useAction();
  const handleSubmit =  (values: IAddBook) => {
    changeBook(values, id!);
    navigate('/');
  };
  if(loading) return <Loader loading={loading}/>
  return (
    <div className="container m-t">
      <Form
        onSubmitHandler={handleSubmit}
        title="Изменить данные книги"
        formValues={book}
        submitText="Изменить"
      />
    </div>
  );
};

export default ChangeBook;
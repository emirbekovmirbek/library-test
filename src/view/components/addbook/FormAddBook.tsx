import React from 'react';
import './formadd.scss';
import Modal from '../modal/Modal';
import Form from '../form/Form';
import {useAction} from '../../../hooks/useActions';
import {IAddBook} from '../../../types/books';

type PropsType = {
  isShown: boolean;
  handleChange: (value: boolean) => void;
}
const FormAddBook: React.FC<PropsType> = ({isShown, handleChange}) => {
  const {addBook,fetchBooks} = useAction();
  const handleSubmit = (values: IAddBook) => {
    addBook(values);
    handleChange(false);
    fetchBooks();
  };
  return (
    <Modal isOpen={isShown} onClose={() => handleChange(false)}>
      <div className="form-add">
        <Form onSubmitHandler={handleSubmit} title="Добавить новую книгу"/>
      </div>
    </Modal>
  );
};

export default FormAddBook;
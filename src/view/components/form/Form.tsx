import React, {FormEvent} from 'react';
import {Input} from '../input/Input';
import Select from '../select/Select';
import {IAddBook, IError} from '../../../types/books';
import validateForm from '../../../ts/validation';
import './form.scss';

type PropsType = {
  submitText?: string;
  onSubmitHandler: (form: IAddBook ) => void;
  formValues?:  IAddBook
  title: string
};

const Form: React.FC<PropsType> = ({ formValues, submitText, onSubmitHandler, title}) => {
  const [form, setForm] = React.useState<IAddBook>({
    name: '',
    author: '',
    banner: '',
    genre: '',
    wish: false
  });
  const [errors, setErrors] = React.useState<IError>({
    name: '',
    author: '',
    banner: '',
    genre: '',
  });
  React.useEffect(()=> {
    if(formValues !== undefined) {
      setForm({...formValues});
    }
  },[]);
  const handleChange = (name: string, value: string):void  =>{
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }))
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorsResponse = validateForm(form);
    setErrors(errorsResponse);
    const check: any[] = Object.values(errorsResponse).filter(item => item !== '');
    if(!check.length) {
      onSubmitHandler(form);
      setForm({
        name: '',
        author: '',
        banner: '',
        genre: '',
        wish: false
      })
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="form-add__title">{title}</h1>
      <div className="form-add__field">
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          text="Название книги"
          type="text"
          error={errors.name}
        />
      </div>
      <div className="form-add__field">
        <Input
          name="author"
          value={form.author}
          onChange={handleChange}
          text="Автор"
          type="text"
          error={errors.author}
        />
      </div>
      <div className="form-add__field">
        <Input
          name="banner"
          value={form.banner}
          onChange={handleChange}
          text="Ссылка на фото книги"
          type="text"
          error={errors.banner}
        />
      </div>
      <div className="form-add__field">
        <Select
          value={form.genre}
          onChange={handleChange}
          name="genre"
          text="Выберите жанр"
          error={errors.genre}
        />
      </div>
      <button className="form-add__action">{submitText !== undefined ? submitText:'Добавить'}</button>
    </form>
  );
};

export default Form;
import {IAddBook, IError} from '../types/books';


export default function validateForm(form: IAddBook) {
  let errors: IError = {
    author: '',
    banner: '',
    genre: '',
    name: '',
  };
  if (!form.author.trim() ||!form.author) {
    errors.author = 'Поле автора не должно быть пустым';
  }
  if (!form.banner.trim() ||!form.banner) {
    errors.banner = 'Поле не должно быть пустым';
  } else if(checkImage(form.banner)){
    errors.banner = 'Укажите правильную ссылку';
  }
  if (!form.genre) {
    errors.genre = 'Выберите жанр';
  }

  if (!form.name.trim() || !form.name) {
    errors.name = 'Название книги не должно быть пустым';
  }
  return errors;
}

 function checkImage(url: string) {
   const regexpUrl = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;
   return !url.match(regexpUrl);
}
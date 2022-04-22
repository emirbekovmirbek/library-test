import {IBook, IFilter} from '../types/books';
import React from 'react';

export const useBooksFilter = (booksList:IBook[], filter: IFilter ): IBook[] => {
 return React.useMemo<IBook[]>(() => {
   const books = booksList.filter((item) => item.genre.includes(filter.genre));
   books.sort((a, b) => {
     if(a[filter.sort as keyof IBook] > b[filter.sort as keyof IBook]) {
       return 1;
     } else if (b[filter.sort as keyof IBook] > a[filter.sort as keyof IBook]) {
       return -1
     }
     return 0
   });
   return books
 },[booksList, filter]);
};
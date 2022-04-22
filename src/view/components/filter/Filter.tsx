import React from 'react';
import './filter.scss'
import Select from '../select/Select';
import {IFilter} from '../../../types/books';

type PropType = {
  value: IFilter;
  onChange: (name: string, value: string) => void;
  children?: React.ReactNode;
};

const Filter: React.FC<PropType> = ({value, onChange,children}) => {
  return (
    <div className="filter">
      <div className="filter__sort">
        <input
          type="radio"
          id="contactChoice1"
          name="sort"
          onChange={(e) => onChange(e.target.name, e.target.value)}
          checked={value.sort === 'name'}
          value="name"/>
        <label htmlFor="contactChoice1" className="filter__label">по названию книги</label>
        <input
          type="radio"
          id="contactChoice2"
          name="sort"
          value="author"
          onChange={(e) => onChange(e.target.name, e.target.value)}
          checked={value.sort === 'author'}
        />
        <label htmlFor="contactChoice2" className="filter__label">по авторам</label>
      </div>
      <Select
        value={value.genre}
        onChange={onChange}
        name='genre'
        text='Выберите жанр'
      />
      {children}
    </div>
);
};

export default Filter;
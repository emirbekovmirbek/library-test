import React from 'react';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import './select.scss'
import Dropdown from '../dropdown/Dropdown';

interface PropsType {
  value: string;
  onChange: (name: string, value: string) => void;
  name: string;
  text: string;
  error?: string;
}

const Select: React.FC<PropsType> = ({value, onChange, name, text, error}) => {
  const {genres} = useTypedSelector(state => state.library);
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const handleClick = (name: string, value: string) => {
    onChange(name, value);
    setIsShow(false);
  };
  return (
    <div className="select">
      <div className="select__label" onClick={() => setIsShow(!isShow)}>
        {value ? value : text}
      </div>
      <Dropdown isShown={isShow}>
        {genres.map((item: string, idx: number) =>
          <li
            className="select__option"
            key={idx}
            onClick={() => handleClick(name, item)}
          >
            <span className={`select__checkbox ${item === value ? 'select__checkbox--active' : ''}`}/>
            <span className="select__text">{item || 'Все'}</span>
          </li>
        )}
      </Dropdown>
      {error && <span className="select__error">{error}</span>}
    </div>
  );
};

export default Select;
import React from 'react';
import './input.scss';

interface PropsType {
  type: string;
  disabled?: boolean;
  text: string;
  error?: string;
  value: string;
  onChange: (name: string, value:string) => void;
  name: string

}
export const Input:React.FC <PropsType> = ({type, disabled, text, error, value, onChange, name }) => {
  const [active, setActive] = React.useState<boolean>(Boolean( false));
  return (
    <div className="input">
      <label htmlFor={text} className={`input__label ${(value !== '' ||active)? 'active': ''}`}>
        {text}
      </label>
      <input
        value={value}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(name, e.target.value)}
        onFocus={() => setActive(true)}
        id={text}
        className="input__input"
        type={type}
        disabled={disabled}
        onBlur={() => setActive(value !== '')}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};

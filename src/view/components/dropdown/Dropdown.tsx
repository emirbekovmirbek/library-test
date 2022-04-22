import React from 'react';
import './dropdown.scss'

type PropType = {
  isShown: boolean;
  children: React.ReactNode
}
const Dropdown : React.FC<PropType> = ({isShown, children}) => {
  return (
    <ul className={`dropdown ${isShown ? 'dropdown--shown' : ''}`}>
      {children}
    </ul>
  );
};
export default Dropdown;
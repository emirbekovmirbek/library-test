import React from 'react';
import './header.scss'
import logo from '../../../assets/—Pngtree—library logo_3422102.png'
import {NavLink, useNavigate} from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav className="header__menu container">
        <div className="header__logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo"/>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <NavLink to="/">
              Главная
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/wish-book">
              Желаемые книги
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
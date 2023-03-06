import React from "react";
import '../style/Header.css';
import { GoLocation } from 'react-icons/go';
import { GrMenu } from 'react-icons/gr';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__btn header__btn--menu"><GrMenu/></button>
      </div>
      <div className="header__center">
        <input
          type="text"
          className="header__search"
          placeholder="Search place"
        />
        <button className="header__btn header__btn--search">Search</button>
      </div>
      <div className="header__right">
        <button className="header__btn header__btn--location"><GoLocation/></button>
      </div>
    </header>
  );
}

export default Header;

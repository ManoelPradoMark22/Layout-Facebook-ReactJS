import React from 'react';
import avatar from '../assets/profile.jpg'
import logo from '../assets/logo.png'
import Search from './SvgComponent'
import SearchButton from './searchButton'

function Header() {
  return (
    <header>
      <nav>
        <div className="search">
        <img className="logo" src={logo} alt="logo"/>
        <input type="text" placeholder="Pesquisar"></ input>
        <SearchButton />
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar"/>
          <span>Manoel</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
import React from 'react';
import avatar from '../assets/profile.jpg'
import logo from '../assets/logo.png'
import SearchButton from '../assets/searchButton'
import IconFriends from '../assets/iconFriends'
import IconMessages from '../assets/iconMessages'
import IconNotifications from '../assets/iconNotifications'
import IconConfigurations from '../assets/iconConfigurations'

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
          <ul>
            <li><span>Manoel</span></li>
            <li><span>Página Inicial</span></li>
            <li><span>Criar</span></li>
            <li>
              <ul className="icons">
                <div><IconFriends/></div>
                <div><IconMessages/></div>
                <div><IconNotifications/></div>
              </ul>
            </li>
            <li><IconConfigurations/></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
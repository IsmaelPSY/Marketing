import React from "react";
import './Navbar.css'
import { Search, ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';

const Navbar = () => {
  return <div className="container">
    <nav>
      <div className="left">
        <div className="search-container">
          <input type="text" />
          <Search style={{color:"gray", fontSize:16}}></Search>
        </div>
      </div>
      <div className="center">
        <h1 className="Logo">D'Karlo Shoes Sport</h1>
      </div>
      <div className="right">
        <div className="menu-items">Registrarme</div>
        <div className="menu-items">Iniciar Session</div>
        <div className="menu-items">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </div>
    </nav>
  </div>;
};

export default Navbar;

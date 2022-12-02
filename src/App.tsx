import React from "react";
import logo from "./logo.svg";
import { SearchInput } from "./components/SearchInput";
import { AppStyled } from "./App.styled";
import { Cart } from "./components/Cart";
import { Menu } from "./components/Menu";
import {authentification} from "./api/auth";
import {useQuery} from "react-query";

function App() {

    const {data: access_token} = useQuery(["auth"], authentification)

    console.log('access_token',access_token );
  return (
    <AppStyled className="zelty-restaurant">
      <header>
        <img className="zelty-restaurant__logo" src={logo} alt="logo" />
      </header>
      <div className="zelty-restaurant__content">
        <div className="zelty-restaurant__content__left">
          <SearchInput />
          <Menu />
          <div className="zelty-restaurant__products">Liste des produits</div>
        </div>
        <div className="zelty-restaurant__content__right">
          <Cart />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;

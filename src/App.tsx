import React, { useEffect } from "react";
import logo from "./logo.svg";
import { AppStyled } from "./App.styled";

import { authentification } from "./api/auth";
import { useQuery } from "react-query";

import { getProducts } from "./api/getProducts";
import { SearchInput } from "./components/Atoms/SearchInput";
import { Menu } from "./components/Organism/Menu";
import { Card } from "./components/Organism/Card";
import { Cart } from "./components/Organism/Cart";
import { getMenus } from "./api/getMenus";
import { getOptions } from "./api/getOptions";

function App() {
  const { data: access_token } = useQuery(["auth"], authentification);
  localStorage.setItem("access_token", access_token?.access_token);

  const { data: products } = useQuery(["products"], getProducts);
  const { data: menus } = useQuery(["menus"], getMenus);
  const { data: options } = useQuery(["options"], getOptions);

  return (
    <AppStyled className="zelty-restaurant">
      <header>
        <img className="zelty-restaurant__logo" src={logo} alt="logo" />
      </header>
      <div className="zelty-restaurant__content">
        <div className="zelty-restaurant__content__left">
          <SearchInput />
          <Menu />

          <div className="zelty-restaurant__products">
            Liste des produits
            {products && <Card products={products} />}
          </div>
        </div>
        <div className="zelty-restaurant__content__right">
          <Cart />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;

import React, { useEffect } from "react";
import logo from "./logo.svg";
import { AppStyled } from "./App.styled";

import { authentification } from "./api/auth";
import { useQuery } from "react-query";
import { authTokenState } from "./atoms/auth.atom";
import { useRecoilState } from "recoil";

import { getProducts } from "./api/getProducts";
import { SearchInput } from "./components/Atoms/SearchInput";
import { Menu } from "./components/Organism/Menu";
import { Card } from "./components/Organism/Card";
import { Cart } from "./components/Organism/Cart";

function App() {
  const [, setAuthToken] = useRecoilState(authTokenState);
  const { data: access_token } = useQuery(["auth"], authentification);

  const { data: products } = useQuery(["products"], getProducts);

  useEffect(() => {
    setAuthToken(access_token);
  }, [access_token]);

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
            <Card products={products} />
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

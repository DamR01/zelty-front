import React, { useState } from "react";
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
import { Product } from "./helpers/product.interface";
import { find } from "lodash";

function App() {
  const { data: access_token } = useQuery(["auth"], authentification);
  localStorage.setItem("access_token", access_token?.access_token);

  const token = localStorage.getItem("access_token");
  const { data: products } = useQuery(["products"], getProducts, {
    enabled: !!token,
  });
  const { data: menus } = useQuery(["menus"], getMenus, {
    enabled: !!token,
  });
  const { data: options } = useQuery(["options"], getOptions, {
    enabled: !!token,
  });

  const productWithMenu =
    products &&
    products?.map((item: Product) => {
      const menuName = menus && find(menus, ["id", item.menuId]);

      return {
        ...item,
        menuName: menuName.name,
      };
    });

  const [catalog, setCatalog] = useState(productWithMenu);

  const onSearch = (value: string) => {
    const tinyValue = value.toLowerCase();

    const valueSearch = productWithMenu.filter((product: Product) => {
      const productNameTiny = product.name.toLowerCase();
      return productNameTiny.search(tinyValue) !== -1;
    });

    setCatalog(valueSearch);
  };

  return (
    <AppStyled className="zelty-restaurant">
      <header>
        <img className="zelty-restaurant__logo" src={logo} alt="logo" />
      </header>
      <div className="zelty-restaurant__content">
        <div className="zelty-restaurant__content__left">
          <SearchInput onSearch={onSearch} />
          <Menu />
          Liste des produits
          <div className="zelty-restaurant__products">
            {catalog && <Card products={catalog} />}
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

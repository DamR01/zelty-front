import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { AppStyled } from "./App.styled";

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
  const { data: products } = useQuery(["products"], getProducts);
  const { data: menus } = useQuery(["menus"], getMenus);
  const { data: options } = useQuery(["options"], getOptions);

  const productWithMenu =
    products &&
    products?.map((item: Product) => {
      const menuName = menus && find(menus, ["id", item.menuId]);

      return {
        ...item,
        menuName: menuName.name,
      };
    });

  const [catalog, setCatalog] = useState([]);
  const [activeBadge, setActiveBadge] = useState("");

  useEffect(() => setCatalog(productWithMenu), [products]);

  const onSearch = (value: string) => {
    const tinyValue = value.toLowerCase();

    const valueSearch = productWithMenu.filter((product: Product) => {
      const productNameTiny = product.name.toLowerCase();
      return productNameTiny.search(tinyValue) !== -1;
    });

    setCatalog(valueSearch);
  };

  const onFilter = (value: string) => {
    const badgeFilter = productWithMenu.filter(
      (product: Product) => value === product.menuName
    );
    setActiveBadge(value);
    setCatalog(badgeFilter);
  };

  return (
    <AppStyled className="zelty-restaurant">
      <header>
        <img className="zelty-restaurant__logo" src={logo} alt="logo" />
      </header>
      <div className="zelty-restaurant__content">
        <div className="zelty-restaurant__content__left">
          <SearchInput onSearch={onSearch} />
          <Menu
            menus={menus || []}
            onFilter={onFilter}
            activeBadge={activeBadge}
          />
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

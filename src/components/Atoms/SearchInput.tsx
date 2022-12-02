import { SearchInputStyled } from "../styles/SearchInput.styled";

export const SearchInput = () => {
  return (
    <SearchInputStyled className="zelty-restaurant__search">
      <input type="search" placeholder="Rechercher un produit..." />
    </SearchInputStyled>
  );
};

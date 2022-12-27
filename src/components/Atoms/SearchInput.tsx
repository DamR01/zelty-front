import { SearchInputStyled } from "../styles/SearchInput.styled";

interface SearchInputProps {
  onSearch: (text: string) => void;
}

export const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <SearchInputStyled className="zelty-restaurant__search">
      <input
        type="text"
        placeholder="Rechercher un produit..."
        onChange={({ target: { value } }) => onSearch(value)}
      />
    </SearchInputStyled>
  );
};

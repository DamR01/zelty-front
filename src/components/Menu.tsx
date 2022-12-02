import { Badge } from "./Badge";
import { MenuStyled } from "./styles/Menu.syled";

export const Menu = () => {
  return (
    <MenuStyled className="zelty-restaurant__menu">
      <Badge active dark>
        Entrées
      </Badge>
      <Badge dark>Plats</Badge>
      <Badge dark>Desserts</Badge>
    </MenuStyled>
  );
};

import { MenuStyled } from "../styles/Menu.syled";
import { Badge } from "../Atoms/Badge";
import { Menu as MenuInterface } from "../../helpers/menu.interface";

interface MenuProps {
  menus: MenuInterface[];
  onFilter(value: string): void;
  activeBadge: string;
}

export const Menu = ({ menus, onFilter, activeBadge }: MenuProps) => {
  return (
    <MenuStyled className="zelty-restaurant__menu">
      {menus.map((menu) => (
        <Badge
          key={menu.id}
          dark
          onClick={() => onFilter(menu.name)}
          active={activeBadge === menu.name}
        >
          {menu.name}
        </Badge>
      ))}
    </MenuStyled>
  );
};

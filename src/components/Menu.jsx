import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink className="menu__item" to=".">
        ГЛАВНАЯ
      </NavLink>
      <NavLink className="menu__item" to="drift">
        ДРИФТ-ТАКСИ
      </NavLink>
      <NavLink className="menu__item" to="attack">
        TIME ATTACK
      </NavLink>
      <NavLink className="menu__item" to="karting">
        FORZA KARTING
      </NavLink>
    </nav>
  );
};

export default Menu;

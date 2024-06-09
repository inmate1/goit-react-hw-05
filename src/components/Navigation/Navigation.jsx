// Меню с навигационными ссылками перенесите в компонент Navigation . Он состоит из двух компонентов NavLink , указывающих на маршруты / и /movies .
import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css"

const buildLinkClass = ({ isActive }) => {
  return `${css.link} ${isActive ? css.active : ''}`;
};
const Navigation = () => {
    return (
      <header className={css.header}>

        <nav className={css.nav}>
          <NavLink to='/' className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to='/movies' className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
    );
}
export default Navigation;
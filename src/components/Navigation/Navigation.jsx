import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to='/' className={getLinkStyles}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to='/contacts' className={getLinkStyles}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

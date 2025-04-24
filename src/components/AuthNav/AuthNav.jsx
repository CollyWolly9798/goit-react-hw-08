import { NavLink } from 'react-router';
import css from './AuthNav.module.scss';

export default function AuthNav() {
  return (
    <div>
      <NavLink to='/register' className={css.link}>
        Register
      </NavLink>
      <NavLink to='/login' className={css.link}>
        Login
      </NavLink>
    </div>
  );
}

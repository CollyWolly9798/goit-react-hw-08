import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import css from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const disptach = useDispatch();
  const handleLogout = () => {
    disptach(logout());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome,{user.name}</p>
      <button type='button' onClick={handleLogout} className={css.logoutBtn}>
        Logout
      </button>
    </div>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
export default function UserMenu() {
  const user = useSelector(selectUser);
  const disptach = useDispatch();
  const handleLogout = () => {
    disptach(logout());
  };
  return (
    <div>
      <p>Welcome,{user.name}</p>
      <button type='button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

import { NavLink } from 'react-router';

export default function AuthNav() {
  return (
    <div>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </div>
  );
}

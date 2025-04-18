import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div>
      <h2 className={css.title}>Login Page</h2>
      <LoginForm />
    </div>
  );
}

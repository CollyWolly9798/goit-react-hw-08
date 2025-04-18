import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.scss';

export default function RegisterPage() {
  return (
    <div>
      <h2 className={css.title}>RegisterPage</h2>
      <RegistrationForm />
    </div>
  );
}

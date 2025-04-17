import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import css from '../LoginForm/LoginForm.module.scss';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleLogin = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(({ user }) => {
        toast.success(`Welcome back, ${user.name}!`);
      })
      .catch(() => {
        toast.error('Invalid username or password. Please try again.');
      });
    actions.resetForm();
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').max(20, 'Too Long!').required('Required'),
  });

  return (
    <Formik validationSchema={loginSchema} initialValues={{ email: '', password: '' }} onSubmit={handleLogin}>
      <Form autoComplete='off' className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor='email'>Email</label>
          <div className={css.inputIcon}>
            <MdEmail className={css.icon} />
            <Field className={css.field} type='email' name='email' />
          </div>
          <ErrorMessage className={css.err} name='email' component='span' />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor='password'>Password</label>
          <div className={css.inputIcon}>
            <RiLockPasswordFill className={css.icon} />
            <Field className={css.field} type='password' name='password' />
          </div>
          <ErrorMessage className={css.err} name='password' component='span' />
        </div>
        <button type='submit' className={css.btn}>
          Login
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
}

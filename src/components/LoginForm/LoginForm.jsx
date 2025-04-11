import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleLogin = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleLogin}>
      <Form autoComplete='off'>
        <label>
          Email
          <Field type='email' name='email' />
        </label>
        <label>
          Password
          <Field type='password' name='password' />
        </label>
        <button type='submit'>Login</button>
      </Form>
    </Formik>
  );
}

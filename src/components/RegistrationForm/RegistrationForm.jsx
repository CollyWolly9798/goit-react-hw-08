import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(({ user }) => {
        toast.success(`Registration successful! Welcome ${user.name} aboard!`);
      })
      .catch(() => {
        toast.error('Oops! Registration failed. Please ensure all fields are correctly filled.');
      });
    actions.resetForm();
  };

  const registrationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').max(20, 'Too Long!').required('Required'),
  });

  return (
    <Formik
      validationSchema={registrationSchema}
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete='off' className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor='name'>Username</label>
          <div className={css.inputIcon}>
            <FaUser className={css.icon} />
            <Field className={css.field} type='text' name='name' />
          </div>
          <ErrorMessage className={css.err} name='name' component='span' />
        </div>
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
          Register
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
}

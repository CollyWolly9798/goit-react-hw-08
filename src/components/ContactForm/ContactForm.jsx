import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { FaUser, FaPhone } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import css from './ContactForm.module.scss';

export default function ContactForm() {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string()
      .required('Required')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67'),
  });

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value))
      .unwrap()
      .then(() => toast('Contact successfully added!'));
    actions.resetForm();
  };

  return (
    <Formik validationSchema={FeedbackSchema} initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor='name'>Name</label>
          <div className={css.inputIcon}>
            <FaUser className={css.icon} />
            <Field className={css.field} type='text' name='name' id='name' />
          </div>
          <ErrorMessage className={css.err} name='name' component='span' />
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor='number'>Number</label>
          <div className={css.inputIcon}>
            <FaPhone className={css.icon} />
            <Field className={css.field} type='text' name='number' id='number' />
          </div>
          <ErrorMessage className={css.err} name='number' component='span' />
        </div>

        <button type='submit' className={css.btn}>
          Add contact
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
}

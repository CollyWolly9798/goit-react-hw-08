import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.scss';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id)).unwrap().then(toast('Contact successfully deleted!'));
  };
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.li}>
          <FaUser className={css.icon} />
          {contact.name}
        </li>
        <li className={css.li}>
          <FaPhone className={css.icon} />
          {contact.number}
        </li>
      </ul>
      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}

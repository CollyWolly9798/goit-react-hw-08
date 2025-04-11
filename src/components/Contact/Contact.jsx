import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li>{contact.name}</li>
        <li>{contact.number}</li>
      </ul>
      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}

import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';

export default function ContactList() {
  const users = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contacts}>
      {users.map(user => (
        <li className={css.el} key={user.id}>
          <Contact contactsList={user} />
        </li>
      ))}
    </ul>
  );
}

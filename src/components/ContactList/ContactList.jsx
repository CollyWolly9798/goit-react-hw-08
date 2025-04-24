import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import css from './ContactList.module.scss';

export default function ContactList() {
  const users = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contacts}>
      {users.map(user => (
        <li className={css.el} key={user.id}>
          <Contact contact={user} />
        </li>
      ))}
    </ul>
  );
}

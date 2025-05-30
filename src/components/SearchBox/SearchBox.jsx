import { changeFilter } from '../../redux/filters/slice';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import css from './SearchBox.module.scss';

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.form}>
      <div className={css.inputWrapper}>
        <label htmlFor='search'>Find contacts by name or number</label>
        <div className={css.inputIcon}>
          <FaSearch className={css.icon} />
          <input className={css.field} type='text' id='search' onChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
}

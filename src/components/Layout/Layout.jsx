import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

export default function Loyout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}

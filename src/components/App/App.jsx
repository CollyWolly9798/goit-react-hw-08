import Loyout from '../Loyout/Loyout';
import { Route, Routes } from 'react-router';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Getting user data please wait...</strong>
  ) : (
    <div className={css.div}>
      <Loyout>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Loyout>
    </div>
  );
}

export default App;
// reacthw112@gmail.com

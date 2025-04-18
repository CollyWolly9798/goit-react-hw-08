import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
import css from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Getting user data, please wait...</strong>
  ) : (
    <div className={css.div}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />} />
            <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
            <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;

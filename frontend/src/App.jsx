import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Layout from './Layout';
import ErrorPage from './pages/Error/ErrorPage';
import Dashboard from './pages/Dashboard/Dashboard';
import RegisterBook from './pages/RegisterBook/RegisterBook';
import MyBooks from './pages/MyBooks/MyBooks';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        {/* Rutas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books/new" element={<RegisterBook />} />
          <Route path="/my-books" element={<MyBooks />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

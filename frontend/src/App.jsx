import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Layout from './Layout';
import ErrorPage from './pages/Error/ErrorPage';
import Dashboard from './pages/Dashboard/Dashboard';
import RegisterBook from './pages/RegisterBook/RegisterBook'; // 👈 Nuevo import
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books/new" element={<RegisterBook />} /> {/* 👈 Nueva ruta */}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

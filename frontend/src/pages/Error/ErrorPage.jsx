import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4 dark:from-gray-900 dark:via-gray-800 dark:to-gray-600">
      <div className="text-center">
        <h1 className="principal-text font-extrabold text-white dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-[42px] font-semibold text-gray-800 dark:text-white mb-2">
          Página no encontrada
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition shadow-lg"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

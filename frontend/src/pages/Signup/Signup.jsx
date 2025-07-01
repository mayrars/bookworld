import { useState } from "react";
function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError("");
    console.log("Formulario enviado:", form);
    // Aquí podrías hacer la llamada a tu backend o Firebase
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">Crear cuenta</h2>
        {error && <div className="bg-red-100 text-red-600 p-2 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left mb-3">Nombre completo</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left mb-3">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left mb-3">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left mb-3">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
          >
            Registrarse
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          ¿Ya tienes cuenta? <a href="/login" className="text-indigo-500 hover:underline">Inicia sesión</a>
        </p>
      </div>
    </div>
  )
}

export default SignUp
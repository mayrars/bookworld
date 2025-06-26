import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login exitoso", data);

        // ✅ Simula autenticación guardando un flag
        localStorage.setItem('auth', 'true');

        // 🔄 Redirige al dashboard
        navigate("/dashboard");
      } else {
        console.error("Error de inicio de sesión", data);
        alert("Credenciales incorrectas.");
      }
    } catch (error) {
      console.error("Error en la petición", error);
      alert("Error en la conexión con el servidor.");
    }

  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-10 dark:text-gray-900 mb-8">
        Login
      </h1>
      <form className="max-w-sm mx-auto mb-12" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
            placeholder="tu@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-600 dark:focus:border-blue-600"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-300 
                         dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-600"
            />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-white">
            Recuérdame
          </label>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-indigo-600 hover:bg-indigo-700 
                     focus:ring-4 focus:outline-none focus:ring-indigo-300 
                     font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                     dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
        >
          Iniciar sesión
        </button>
      </form>
    </section>
  );
};

export default Login;

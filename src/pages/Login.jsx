import React from 'react';
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Capa de transparencia */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenedor del formulario */}
      <div className="relative flex justify-center items-center h-full">
        <div className="w-11/12 max-w-sm bg-transparent p-6 rounded-lg text-center">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/src/images/BUTTONBLINK.png"
              alt="Logo"
              className="w-12 h-auto mx-auto"
            />
          </div>

          {/* Título y subtítulo */}
          <h1 className="text-2xl font-bold text-white mb-2">¿Juegas de nuevo?</h1>
          <p className="text-gray-300 mb-6">¡Ingresa tus datos!</p>

          {/* Formulario */}
          <form className="flex flex-col gap-4">
            {/* Username */}
            <div className="relative border border-white rounded-full flex items-center bg-transparent">
              <span className="text-white text-lg px-4">👤</span>
              <input
                type="text"
                id="username"
                placeholder="USERNAME"
                required
                className="w-full p-3 bg-transparent text-white placeholder-white focus:outline-none rounded-full"
              />
            </div>

            {/* Password */}
            <div className="relative border border-white rounded-full flex items-center bg-transparent">
              <span className="text-white text-lg px-4">🔒</span>
              <input
                type="password"
                id="password"
                placeholder="PASSWORD"
                required
                className="w-full p-3 bg-transparent text-white placeholder-white focus:outline-none rounded-full"
              />
            </div>

            {/* Botones */}
            <button
              onClick={() => navigate("/menu")}
              className="w-full py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition"
            >
              LOGIN
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full py-3 bg-gray-300 text-black font-bold rounded-full hover:bg-gray-400 transition"
            >
              RETURN
            </button>
          </form>

          {/* Texto para crear cuenta */}
          <p className="mt-6 text-gray-300">
            ¿Aún sin cuenta?{' '}
            <Link to="/register" className="text-green-400 hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export const Login = () => {
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <div className="w-11/12 max-w-md text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="images/buttonBlinkLogo.png"
            alt="Logo"
            className="w-12 h-auto mx-auto"
          />
        </div>

        {/* Título y subtítulo */}
        <h1 className="text-2xl font-bold text-black mb-2">¿Juegas de nuevo?</h1>
        <p className="text-gray-600 mb-6">¡Ingresa tus datos!</p>

        {/* Formulario */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            placeholder="Usuario"
            required
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              required
              className="flex-grow text-gray-700 focus:outline-none"
            />
            <span className="text-gray-600 text-xl cursor-pointer">👁️</span>
          </div>

          {/* Botones */}
          <a
            href="menu.html"
            className="w-full py-3 bg-black text-white font-bold rounded-md shadow hover:bg-gray-800 transition"
          >
            Ingresar
          </a>
          <a
            href="parametros.html"
            className="w-full py-3 bg-gray-400 text-black font-bold rounded-md shadow hover:bg-gray-500 transition"
          >
            Ingresar como invitado
          </a>
          <a
            href="index.html"
            className="w-full py-3 bg-gray-200 text-black font-bold rounded-md shadow hover:bg-gray-300 transition"
          >
            Regresar al menú
          </a>
        </form>

        {/* Texto de registro */}
        <p className="mt-6 text-gray-600">
          ¿Aun sin cuenta?{' '}
          <a href="#" className="text-black hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};
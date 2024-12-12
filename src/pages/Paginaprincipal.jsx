import React from "react";
import { useNavigate } from "react-router-dom";

export const Paginaprincipal = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Contenedor transparente con blur */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-10 text-center w-11/12 max-w-lg">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/src/images/BUTTONBLINK.png"
            alt="Logo ButtonBlink"
            className="w-20 h-auto mx-auto"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-black mb-2">BUTTONBLINK</h1>
        <p className="text-lg text-gray-700 mb-8">¿Eres tan rápido como crees?</p>

        {/* Botón de ingreso */}
        <div className="mb-10">
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-black text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition duration-200"
          >
            INGRESAR
          </button>
        </div>

        {/* Íconos */}
        <div className="flex justify-center gap-4">
          <div className="w-14 h-14 bg-white border rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition duration-200">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB..."
              alt="Twitter"
              className="w-6 h-6"
            />
          </div>
          <div className="w-14 h-14 bg-white border rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition duration-200">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB..."
              alt="Telegram"
              className="w-6 h-6"
            />
          </div>
          <div className="w-14 h-14 bg-white border rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition duration-200">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB..."
              alt="Email"
              className="w-6 h-6"
            />
          </div>
          <div className="w-14 h-14 bg-white border rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition duration-200">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB..."
              alt="YouTube"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

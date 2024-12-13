import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Lobby = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener la dificultad desde el state pasado
  const difficulty = location.state?.difficulty || 'EASY'; // Valor predeterminado

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Contenedor principal transparente */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 w-10/12 max-w-lg text-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="/src/images/BUTTONBLINK.png"
            alt="ButtonBlink Logo"
            className="w-12 h-auto mx-auto"
          />
        </div>

        {/* Sala Info */}
        <div className="text-center mb-4">
          <div className="border-2 border-black bg-green-500 text-black rounded-full px-6 py-2 text-lg font-bold mb-2">
            SALA #0001
          </div>
          <p className="text-white font-semibold">10 SEGUNDOS PARA EMPEZAR PARTIDA...</p>
        </div>

        {/* Dificultad */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <p className="font-bold text-lg text-yellow-500">DIFICULTAD:</p>
          <div className="bg-yellow-500 text-white rounded-full px-4 py-1 text-sm font-bold">
            {difficulty}
          </div>
        </div>

        {/* Lista de Jugadores */}
        <div className="border-2 border-black rounded-md px-4 py-2 mb-6 w-full max-w-md bg-white bg-opacity-60">
          <ol className="list-decimal pl-4 text-left text-black text-sm font-medium">
            <li>aaaaaa</li>
            <li>bbbbb</li>
            <li>ccccc</li>
            <li>ddddd</li>
            <li>eeeee</li>
          </ol>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          {/* Botón Blink */}
          <button
            onClick={() => navigate('/jugando')}
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition"
          >
            BLINK!
          </button>
          {/* Botón Cerrar Sala */}
          <button
            onClick={() => navigate('/menu')}
            className="px-6 py-3 bg-white border-2 border-black text-black font-bold rounded-full hover:bg-gray-100 transition"
          >
            CERRAR SALA
          </button>
        </div>
      </div>
    </div>
  );
};

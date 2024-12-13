import React from 'react';
import { useNavigate } from 'react-router-dom';

export const JoinRoom = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Contenedor principal transparente */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 w-10/12 max-w-lg text-center">
        {/* Parte superior con retorno y logo */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/menu')}
            className="flex items-center gap-2 text-black font-bold px-4 py-2 bg-green-200 rounded-full hover:bg-green-300 transition"
          >
            ←
          </button>
          <img
            src="/src/images/BUTTONBLINK.png"
            alt="ButtonBlink Logo"
            className="w-10 h-auto"
          />
        </div>

        {/* Título */}
        <h2 className="text-xl font-bold text-black mb-6">JOINING ROOM...</h2>

        {/* Número de sala */}
        <div className="border-2 border-black rounded-full px-6 py-2 mb-6 bg-green-200 text-lg font-bold">
          SALA #0001
        </div>

        {/* Botón Ingresar */}
        <button
          onClick={() => navigate('/lobby')}
          className="w-full py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
        >
          JOIN ROOM
        </button>
      </div>
    </div>
  );
};

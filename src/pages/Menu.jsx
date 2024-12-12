import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white px-4 pt-4">
      {/* Logo y Logout */}
      <div className="flex items-center justify-between w-full mb-6">
        <img
          src="/src/images/BUTTONBLINK.png"
          alt="ButtonBlink Logo"
          className="w-12 h-auto"
        />
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-rose-200 text-black font-bold rounded-md shadow-lg hover:bg-rose-300 transition"
        >
          Log out
        </button>
      </div>

      {/* Racha */}
      <div className="text-center mb-6">
        <div className="border-2 border-black rounded-md px-6 py-2">
          <p className="text-lg font-bold">RACHA</p>
        </div>
      </div>

      {/* Íconos */}
      <div className="flex justify-around w-full max-w-xs mb-6">
        <div className="flex flex-col items-center">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4b..."
            alt="Categoría"
            className="w-8 h-8"
          />
          <p className="text-sm font-medium">categoría</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4b..."
            alt="Leaderboard"
            className="w-8 h-8"
          />
          <p className="text-sm font-medium">leaderboard</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4b..."
            alt="Jugados"
            className="w-8 h-8"
          />
          <p className="text-sm font-medium">jugados</p>
        </div>
      </div>

      {/* Botón Agregar Placas */}
      <button
        onClick={() => alert('Funcionalidad de agregar placas pendiente')}
        className="flex items-center gap-2 px-6 py-3 border-2 border-black rounded-md hover:bg-gray-100 transition mb-6"
      >
        🎮 Agregar placas
      </button>

      {/* Botones Create Room y Join Room */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => navigate('/createroom')}
          className="px-6 py-3 bg-white border-2 border-black text-black font-bold rounded-md hover:bg-gray-100 transition"
        >
          CREATE ROOM
        </button>
        <button
          onClick={() => navigate('/joinroom')}
          className="px-6 py-3 bg-rose-200 text-black font-bold rounded-md shadow-lg hover:bg-rose-300 transition"
        >
          JOIN ROOM
        </button>
      </div>
    </div>
  );
};

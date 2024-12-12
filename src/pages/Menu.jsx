import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Blocks } from 'lucide-react';
import { Trophy } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Capa de transparencia */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenedor principal */}
      <div className="relative flex flex-col justify-center items-center h-full">
        {/* Contenedor interior */}
        <div className="bg-white bg-opacity-80 w-11/12 max-w-sm p-6 mt-6 rounded-lg shadow-xl text-center">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-6">
            <img
              src="/src/images/BUTTONBLINK.png"
              alt="Logo ButtonBlink"
              className="w-12 h-auto"
            />
            <button
              onClick={() => navigate('/')} 
              className="px-4 py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 hover:scale-105 transition transform duration-200"
            >
              Logout
            </button>
          </div>

          {/* Título */}
          <h1 className="text-xl font-bold text-gray-800 mb-6">¡BIENVENIDO, user!</h1>

          {/* Íconos */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <Blocks className="w-12 h-12 mb-2 text-gray-800" />
              <p className="text-sm font-medium text-gray-800">Categorías</p>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 mb-2 text-gray-800" />
              <p className="text-sm font-medium text-gray-800">Leaderboard</p>
            </div>
            <div className="flex flex-col items-center">
              <CalendarCheck className="w-12 h-12 mb-2 text-gray-800" />
              <p className="text-sm font-medium text-gray-800">Tasks</p>
            </div>
          </div>

          {/* Botón Agregar Placas */}
          <button
            onClick={() => alert('Funcionalidad de agregar placas pendiente')}
            className="w-full py-3 border border-gray-800 rounded-md text-gray-800 hover:bg-gray-200 transition mb-6"
          >
            🎮 Agregar placas
          </button>

          {/* Botones de Room */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate('/createroom')}
              className="w-full py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 hover:scale-105 transition transform duration-200"
            >
              CREATE ROOM
            </button>
            <button
              onClick={() => navigate('/joinroom')}
              className="w-full py-3 bg-gray-800 text-white font-bold rounded-full hover:bg-gray-900 hover:scale-105 transition transform duration-200"
            >
              JOIN ROOM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
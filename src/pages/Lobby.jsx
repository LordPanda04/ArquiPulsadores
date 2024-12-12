import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Lobby = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener la dificultad desde el state pasado
  const difficulty = location.state?.difficulty;

  // Función para mostrar las estrellas como emojis
  const renderStars = (level) => {
    let stars = '';
    for (let i = 1; i <= 3; i++) {
      stars += i <= level ? '⭐' : '☆'; // Estrella llena o vacía según la dificultad
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white px-4 pt-4">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/src/images/BUTTONBLINK.png"
          alt="ButtonBlink Logo"
          className="w-12 h-auto"
        />
      </div>

      {/* Sala Info */}
      <div className="text-center mb-4">
        <div className="border-2 border-black rounded-md px-6 py-2 mb-2">
          <p className="text-lg font-bold">SALA #0001</p>
        </div>
        <p className="text-sm text-gray-600">10 SEGUNDOS PARA INICIAR PARTIDA</p>
      </div>

      {/* Configuración */}
      <div className="flex justify-center gap-6 mb-6">
        {/* Modalidad */}
        <button className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
          👥
        </button>
        {/* Dificultad */}
        <div className="flex items-center gap-1">
          {/* Mostrar las estrellas si la dificultad está definida */}
          {difficulty && renderStars(difficulty)}
        </div>
      </div>

      {/* Lista de Jugadores */}
      <div className="border-2 border-black rounded-md px-4 py-2 mb-6 w-full max-w-xs">
        <ol className="list-decimal pl-4 text-left text-sm font-medium">
          <li>aaaa</li>
          <li>bbbb</li>
          <li>cccc</li>
          <li>dddd</li>
          <li>eeee</li>
        </ol>
      </div>

      {/* Botones */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {/* Botón Blink */}
        <button
          onClick={() => navigate('/jugando')}
          className="px-6 py-3 bg-rose-200 text-black font-bold rounded-md shadow-lg hover:bg-rose-300 transition"
        >
          BLINK!
        </button>
        {/* Botón Cerrar Sala */}
        <button
          onClick={() => navigate('/menu')}
          className="px-6 py-3 bg-white border-2 border-black text-black font-bold rounded-md hover:bg-gray-100 transition"
        >
          CERRAR SALA
        </button>
      </div>
    </div>
  );
};

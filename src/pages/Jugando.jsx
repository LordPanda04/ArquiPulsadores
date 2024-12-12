import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Jugando = () => {
  const navigate = useNavigate();

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
        {/* Configuración */}
        <div className="flex justify-center gap-6 mb-2">
          {/* Modalidad */}
          <button className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
            👥
          </button>
          {/* Dificultad */}
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
        </div>
        {/* Tiempo restante */}
        <p className="text-sm text-gray-600">1 MINUTO PARA FIN DE PARTIDA...</p>
      </div>

      {/* Tabla de puntuaciones */}
      <div className="border-2 border-black rounded-md px-4 py-2 mb-6 w-full max-w-xs">
        <table className="table-auto w-full text-sm text-center">
          <thead>
            <tr>
              <th className="border-b border-black py-1">#</th>
              <th className="border-b border-black py-1">Nombre</th>
              <th className="border-b border-black py-1">Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-black py-1">1</td>
              <td className="border-b border-black py-1">aaaaa</td>
              <td className="border-b border-black py-1">1432</td>
            </tr>
            <tr>
              <td className="border-b border-black py-1">2</td>
              <td className="border-b border-black py-1">bbbb</td>
              <td className="border-b border-black py-1">1245</td>
            </tr>
            <tr>
              <td className="border-b border-black py-1">3</td>
              <td className="border-b border-black py-1">ccccc</td>
              <td className="border-b border-black py-1">987</td>
            </tr>
            <tr>
              <td className="border-b border-black py-1">4</td>
              <td className="border-b border-black py-1">ddddd</td>
              <td className="border-b border-black py-1">874</td>
            </tr>
            <tr>
              <td className="py-1">5</td>
              <td className="py-1">eeeee</td>
              <td className="py-1">534</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Botón Resultados */}
      <button
        onClick={() => navigate('/ranking')}
        className="px-6 py-3 bg-rose-200 text-black font-bold rounded-md shadow-lg hover:bg-rose-300 transition"
      >
        RESULTADOS
      </button>
    </div>
  );
};

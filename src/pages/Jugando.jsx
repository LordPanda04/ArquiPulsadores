import React from "react";
import { useNavigate } from "react-router-dom";

export const Jugando = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Contenedor Transparente */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 w-11/12 max-w-3xl text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/src/images/BUTTONBLINK.png"
            alt="Logo"
            className="w-16 h-auto mx-auto"
          />
        </div>

        {/* Información de Sala */}
        <h2 className="text-lg font-bold text-black mb-4">SALA #0001</h2>
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className="text-black text-2xl">👤</span>
          <span className="text-yellow-500 text-2xl">⭐⭐⭐</span>
        </div>
        <p className="text-white mb-6">1 MINUTO PARA FIN DE PARTIDA...</p>

        {/* Tabla de Puntuaciones */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-black text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-black">#</th>
                <th className="px-4 py-2 border border-black">Nombre</th>
                <th className="px-4 py-2 border border-black">Acierto</th>
                <th className="px-4 py-2 border border-black">Fallo</th>
                <th className="px-4 py-2 border border-black">Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: "Bob", acierto: 10, fallo: 2, total: 12 },
                { id: 2, name: "Fabio", acierto: 8, fallo: 3, total: 11 },
                { id: 3, name: "Charlie", acierto: 7, fallo: 4, total: 11 },
                { id: 4, name: "Daniel", acierto: 6, fallo: 5, total: 11 },
                { id: 5, name: "Alice", acierto: 5, fallo: 6, total: 11 },
                { id: 6, name: "Esteban", acierto: 4, fallo: 7, total: 11 },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="px-4 py-2 border border-black">{row.id}</td>
                  <td className="px-4 py-2 border border-black">{row.name}</td>
                  <td className="px-4 py-2 border border-black">{row.acierto}</td>
                  <td className="px-4 py-2 border border-black">{row.fallo}</td>
                  <td className="px-4 py-2 border border-black">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botón de Resultados */}
        <button
          onClick={() => navigate("/ranking")}
          className="mt-6 px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition"
        >
          RESULTS
        </button>
      </div>
    </div>
  );
};

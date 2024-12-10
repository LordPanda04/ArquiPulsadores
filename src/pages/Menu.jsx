import React from "react";

export const Menu = () => {
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <div className="w-11/12 max-w-md text-center">
        {/* Header */}
        <Link to="/" className="block mb-12">
          <header className="flex items-center">
            <img
              src="images/buttonBlinkLogo.png"
              alt="ButtonBlink Logo"
              className="w-10 h-auto mr-3"
            />
            <h1 className="text-lg font-bold text-teal-700">BUTTONBLINK</h1>
          </header>
        </Link>

        {/* Streak */}
        <div className="mb-8">
          <div className="border-2 border-black rounded-lg p-4 font-bold text-black">
            <p>RACHA</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-around mb-16">
          <div className="flex flex-col items-center">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL..."
              alt="Categoría"
              className="w-10 h-auto mb-2"
            />
            <p className="text-sm text-black">Categoría</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL..."
              alt="Leaderboard"
              className="w-10 h-auto mb-2"
            />
            <p className="text-sm text-black">Leaderboard</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL..."
              alt="Jugados"
              className="w-10 h-auto mb-2"
            />
            <p className="text-sm text-black">Jugados</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <Link
            to="/parametros"
            className="py-3 px-4 border-2 border-black rounded-lg font-bold text-black bg-white hover:bg-gray-100 transition"
          >
            CREATE ROOM
          </Link>
          <Link
            to="/parametros"
            className="py-3 px-4 border-2 border-black rounded-lg font-bold text-black bg-gray-300 hover:bg-gray-400 transition"
          >
            JOIN ROOM
          </Link>
        </div>
      </div>
    </div>
  );
};

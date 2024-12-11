import React from 'react'
import { useNavigate } from "react-router-dom";

export const CreateRoom = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      {/* Botones */}
      <button
            onClick={() => navigate("/lobby")}
            className="w-full py-3 bg-black text-white font-bold rounded-md shadow hover:bg-gray-800 transition"
          >
            Ingresar al lobby
          </button>
    </div>
  )
}

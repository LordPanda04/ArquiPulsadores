import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Placas = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert('Ha sido agregado exitosamente');
    navigate('/menu');
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Capa de transparencia */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenedor principal */}
      <div className="relative flex flex-col justify-center items-center h-full">
        <div className="bg-white bg-opacity-80 w-11/12 max-w-md p-6 rounded-lg shadow-xl text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/src/images/BUTTONBLINK.png"
              alt="Logo ButtonBlink"
              className="w-16 h-auto"
            />
          </div>

          <h1 className="text-xl font-bold text-gray-800 mb-6">Agregar Placas</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex justify-between items-center mb-4">
              <label htmlFor="tm" className="text-lg font-medium text-gray-800">TM:</label>
              <input
                id="tm"
                type="text"
                className={`w-2/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 ${
                  errors.tm ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Máx. 5 caracteres"
                {...register('tm', {
                  required: 'Este campo es obligatorio',
                  maxLength: {
                    value: 5,
                    message: 'Máximo 5 caracteres',
                  },
                })}
              />
            </div>
            {errors.tm && <p className="text-red-500 text-sm">{errors.tm.message}</p>}

            <div className="flex justify-between gap-4">
              <button
                type="submit"
                className="w-1/2 py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition transform duration-200"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => navigate('/menu')}
                className="w-1/2 py-2 bg-gray-800 text-white font-bold rounded-full hover:bg-gray-900 transition transform duration-200"
              >
                Return
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

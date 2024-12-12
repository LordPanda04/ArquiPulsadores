import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [localErrors, setLocalErrors] = useState({});

  const onSubmit = (data) => {
    console.log(data);
    navigate('/menu');
  };

  const handleInput = (event, fieldName, maxLength, regex = null, errorMessage = '') => {
    const value = event.target.value;
    if (value.length > maxLength || (regex && !regex.test(value))) {
      setLocalErrors((prev) => ({ ...prev, [fieldName]: errorMessage }));
    } else {
      setLocalErrors((prev) => ({ ...prev, [fieldName]: null }));
      setValue(fieldName, value);
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Capa de transparencia */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenedor del formulario */}
      <div className="relative flex justify-center items-center h-full">
        <div className="w-11/12 max-w-sm bg-transparent p-6 rounded-lg text-center">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/src/images/BUTTONBLINK.png"
              alt="Logo"
              className="w-12 h-auto mx-auto"
            />
          </div>

          {/* Título */}
          <h1 className="text-2xl font-bold text-white mb-2">Crear una cuenta</h1>
          <p className="text-gray-300 mb-6">Completa los datos para registrarte</p>

          {/* Formulario */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* Username */}
            <div className="relative border border-white rounded-full flex items-center bg-transparent">
              <span className="text-white text-lg px-4">👤</span>
              <input
                type="text"
                id="username"
                placeholder="USERNAME"
                required
                className="w-full p-3 bg-transparent text-white placeholder-white focus:outline-none rounded-full"
                {...register('username', { required: true })}
                onInput={(e) => handleInput(e, 'username', 10, null, 'Máximo 10 caracteres')}
              />
            </div>
            {localErrors.username && <p className="text-red-500 text-sm">{localErrors.username}</p>}

            {/* Password */}
            <div className="relative border border-white rounded-full flex items-center bg-transparent">
              <span className="text-white text-lg px-4">🔒</span>
              <input
                type="password"
                id="password"
                placeholder="PASSWORD"
                required
                className="w-full p-3 bg-transparent text-white placeholder-white focus:outline-none rounded-full"
                {...register('password', { required: true })}
                onInput={(e) =>
                  handleInput(
                    e,
                    'password',
                    10,
                    /^[a-zA-Z0-9]*$/,
                    'Solo letras, números y máximo 10 caracteres'
                  )
                }
              />
            </div>
            {localErrors.password && <p className="text-red-500 text-sm">{localErrors.password}</p>}

            {/* Email */}
            <div className="relative border border-white rounded-full flex items-center bg-transparent">
              <span className="text-white text-lg px-4">📧</span>
              <input
                type="email"
                id="email"
                placeholder="EMAIL"
                required
                className="w-full p-3 bg-transparent text-white placeholder-white focus:outline-none rounded-full"
                {...register('email', {
                  required: 'El email es obligatorio',
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                })}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            {/* Botón Enviar */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition"
            >
              REGISTER
            </button>

            {/* Botón Return */}
            <button
              onClick={() => navigate('/')}
              className="w-full py-3 bg-gray-300 text-black font-bold rounded-full hover:bg-gray-400 transition"
            >
              RETURN
            </button>
          </form>

          {/* Vuelta a Login */}
          <p className="mt-6 text-gray-300">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-green-400 hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const { register, formState: { errors }, handleSubmit, setValue, getValues } = useForm();
  const navigate = useNavigate();
  const [localErrors, setLocalErrors] = useState({}); // Estado local para manejar errores dinámicos

  const onSubmit = (data) => {
    console.log(data);
    // Lógica adicional después de enviar el formulario
  };

  // Función para manejar entrada y errores dinámicos
  const handleInput = (event, fieldName, maxLength, regex = null, errorMessage = '') => {
    const value = event.target.value;
    if (value.length > maxLength || (regex && !regex.test(value))) {
      setLocalErrors((prev) => ({ ...prev, [fieldName]: errorMessage }));
    } else {
      setLocalErrors((prev) => ({ ...prev, [fieldName]: null }));
      setValue(fieldName, value); // Actualiza el valor si es válido
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-5">REGISTRO</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo Username */}
        <div>
          <label className="block font-bold">USERNAME</label>
          <input
            type="text"
            {...register('username', { required: true })}
            className="border border-gray-300 rounded p-2 w-full"
            onInput={(e) =>
              handleInput(e, 'username', 10, null, 'Máximo 10 caracteres')
            }
          />
          {(errors.username || localErrors.username) && (
            <p className="text-red-500 text-sm">
              {localErrors.username || 'Introduzca nombre de usuario'}
            </p>
          )}
        </div>

        {/* Campo Password */}
        <div>
          <label className="block font-bold">PASSWORD</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="border border-gray-300 rounded p-2 w-full"
            onInput={(e) =>
              handleInput(
                e,
                'password',
                10,
                /^[a-zA-Z0-9]*$/,
                'Solo se permiten letras y números, máximo 10 caracteres'
              )
            }
          />
          {(errors.password || localErrors.password) && (
            <p className="text-red-500 text-sm">
              {localErrors.password || 'Introduzca una contraseña'}
            </p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label className="block font-bold">EMAIL</label>
          <input
            type="email"
            {...register('email', {
              required: 'Introduzca un correo electrónico',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'El email ingresado es incorrecto',
              },
            })}
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Campo Placa */}
        <div>
          <label className="block font-bold">CÓDIGO DE PLACA</label>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500 font-bold">TM-</span>
            <input
              type="text"
              {...register('placa', { required: true })}
              className="border border-gray-300 rounded p-2 w-full"
              onInput={(e) =>
                handleInput(
                  e,
                  'placa',
                  4,
                  /^[a-zA-Z0-9]*$/,
                  'Código de placa incorrecto, solo 4 caracteres'
                )
              }
            />
          </div>
          {(errors.placa || localErrors.placa) && (
            <p className="text-red-500 text-sm">
              {localErrors.placa || 'Introduzca un código de placa válido'}
            </p>
          )}
        </div>

        {/* Botón de Enviar */}
          <button
            type="submit"
            onClick={handleSubmit((data) => {
              console.log(data); // Aquí puedes manejar los datos enviados
              navigate('/menu'); // Redirige a /menu
            })}
            className="w-full py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
          >
            Enviar
          </button>

        {/* Vuelta a Login */}
        <p className="mt-6 text-gray-600">
          ¿Sí tienes cuenta?{' '}
          <Link to="/login" className="text-black hover:underline">
          Inicia sesión aquí
          </Link> 
        </p>
      </form>
    </div>
  );
};

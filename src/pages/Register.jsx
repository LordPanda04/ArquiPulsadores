import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  // const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  return (
    <div class="bg-gray-400 p-4">
      {/* Título */}
      <h2>
        REGISTRO
      </h2>
      
      {/* <form>
        <div>
          <label>USERNAME</label>
          <input type="text" name="" />
        </div>
        <div>
          <label>CONTRASEÑA</label>
          <input type="text" name="" />
        </div>
        <div>
          <label>CÓDIGO DE PLACA</label>
          <input type="text" name="" />
        </div>
        <div>
          <label>EMAIL</label>
          <input type="text" name="" />
        </div>
      </form> */}





      {/* Botones */}
      <button
            onClick={() => navigate("/menu")}
            className="w-full py-3 bg-black text-white font-bold rounded-md shadow hover:bg-gray-800 transition"
          >
            Ingresar
      </button>
    </div>
  )
}

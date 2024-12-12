import axios from "axios";

const usersApi=axios.create({
    baseURL: 'https://touchmatch-production.up.railway.app/api/users/',
});

export const getAllUsuario=()=>usersApi.get("/");
export const getUsuario=(id)=>usersApi.get(`/${id}/`);
export const createUsuario=(usuario)=>usersApi.post("/",usuario);
import axios from "axios";

const roomsApi=axios.create({
    baseURL: 'https://touchmatch-production.up.railway.app/api/room/',
});

export const getAllRooms = ()=>{
    return roomsApi.get('/');
}
export const createRoom=(room)=>{
    return roomsApi.post('/',room);
}

import axios from 'axios';

export const BaseUrl='http://localhost:3000/users'
export const setLogin= async(username,password)=>{
 return await axios.post(`${BaseUrl+ '/logintoken'}`,{username,password})

}

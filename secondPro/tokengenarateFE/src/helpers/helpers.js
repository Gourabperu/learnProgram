import axios from 'axios';

const baseUrl = 'http://localhost:3000/users'

export const setRegister = async(name,email,username)=>{
    return await axios.post(`${baseUrl + '/register'}`,{name,email,username})
}


export const setLogin = async(name,email,username)=>{
    return await axios.get(`${baseUrl + '/'}`,{name,email,username})
}


export const setGtoken= async(username,password)=>{
    return await axios.post(`${baseUrl + '/gtoken'}`,{username,password})
}

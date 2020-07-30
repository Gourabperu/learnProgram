import axios from 'axios';
import {BaseUrl} from '../helpers/login'


export const register= async(username,email,password)=>{
    console.log(username,email,password);
 return await axios.post(`${BaseUrl+ '/create'}`,{username,password,email})

}

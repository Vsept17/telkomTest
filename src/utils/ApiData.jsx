import axios from "axios";

let BASE_URL = import.meta.env.VITE_API_URL;

export const getUserData = async (username) => {
    const url = `${BASE_URL}${username}`;
  
    const res = await axios.get(url);
    return res.data;
  };

  export const getListRepo = async (username) => {
    const url = `${BASE_URL}${username}/repos`;
  
    const res = await axios.get(url);
    return res.data;
  }
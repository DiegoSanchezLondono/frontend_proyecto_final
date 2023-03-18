
import axios from 'axios';
const root = 'http://localhost:5500/'

//llamadas de Usuario
export const postLogin = async (credenciales) => {

     return await axios.post(`${root}users/login`, credenciales);
};
export const postRegister = async (usuario) => {
    //A continuación vemos como se enviaría el body por axios para el registro
    return await axios.post(`${root}users/register`, usuario)
}
export const getallUsers = async (token) => {

    //Esta sería la forma en la que conectaríamos con la API para traernos todos los users en modo admin
    
    let config = {

        method: 'get', //aqui especifico el protocolo http
        url : `${root}/users`, //este sería mi endpoint del backend de admin que trae todos los users
      
        headers: { 
            'Authorization': 'Bearer ' + token
           
          }
          
    }

    return await axios.get(config);
}

//llamadas de videos

export const getVideos = async () => {
    
    return await axios.get(`${root}videos`);
}
export const getAllVideos = async () => {

 return await axios.get(`${root}videos`, {headers: {Authorization: `token ${detailUsr.userPass.token}`}} );
}
export const getSearchVideos = async (title) => {

    return await axios.get(`${root}videos/title/${title}`);
}

//llamadas de pictogramas

export const getPictogram = async () => {
    
    return await axios.get(`https://api.arasaac.org/api/pictograms/es/new/20`);
}
export const getSearchPictograms = async (title) => {

    return await axios.get(`https://api.arasaac.org/api/pictograms/es/search/${title}`);
}


//Llamadas de favoritos

export const postNewFavorite = async (body, token) => {
    let config = {
      
        headers: { Authorization: `Bearer ${token}` }
        
    };
    return await axios.post(`${root}favorites/`, body, config);
}
export const userFavorites = async (token, id) => {
    let config = {
        headers: { Authorization: `Bearer ${token}`}
    }
    return await axios.get(`${root}/user/${id}`, config)
}
export const getAllFavorites = async () => {
    let config = {
        //este sería mi endpoint del backend
       headers: { 
           'Authorization': 'Bearer ' + token
         }
   }
    return await axios.get(`${root}/getAll`,config);
}
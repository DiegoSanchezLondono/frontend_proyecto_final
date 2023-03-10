
import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { userData } from '../pages/User/userSlice';

// const detailUsr = useSelector(userData);
const root = 'http://localhost:5500/'

//llamadas de Usuario
export const postLogin = async (credenciales) => {
    console.log(credenciales);
     return await axios.post(`${root}users/login`, credenciales);

    //Devuelvo un token hardcodeado
    //return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjpbeyJfaWQiOiI2M2I5NWFiM2JkOWU2MDAxYjNmYzlkYmUiLCJuYW1lIjoiTWFyY29zIiwic3VybmFtZSI6IkzDs3BleiIsImRuaSI6IjIzMjc4NjU2TiIsImVtYWlsIjoibWFyY29zbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRTUnZTYWxRVXBmR3hMT2dhVnNZVlcud095cmk0YkZTZDJRcUVaTzFWN0w0T200cjBjSDcyMiIsInBob25lIjo2OTY3NzY0MjEsIm5hdGlvbmFsaXR5IjoiRXNwYcOxYSIsIl9fdiI6MH1dLCJpYXQiOjE2NzM4NTk1MjgsImV4cCI6MTY3Mzk0NTkyOH0.dTAu9QE_93WMHoRukxUWFo2gwJbCBQb4EjUAqImYtPI';
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

export const getVideos = async (video) => {
    
    return await axios.get(`${root}videos`, video);
}

export const getAllVideos = async () => {
//     // console.log(credenciales, 'hkjhkjhjkhkjhkjhkj');
//     // return await axios.get(`${root}videos`, credenciales);
 return await axios.get(`${root}videos`, {headers: {Authorization: `token ${detailUsr.userPass.token}`}} );
     //return await axios.get(`${root}/`, video);

//     //      let config = {

//     //      headers: { 
//     //          'Authorization': 'Bearer ' + token
           
//     //        }
          
//     //  }
//     //  return await axios.get(`${root}videos`,config);
//     // //  return await axios.get(config);

}
// export const getAllVideos = async (token) => {

//     //Esta sería la forma en la que conectaríamos con la API para traernos todos los videos en modo admin
    
//     let config = {

//         method: 'get', //aqui especifico el protocolo http
//         url : `${root}videos`, //este sería mi endpoint del backend de admin que trae todos los videos
      
//         headers: { 
//             'Authorization': 'Bearer ' + token
           
//           }
//     }
//     return await axios.get(config);
// }
//Funcion buscar videos
export const getSearch = async (title) => {

    // return await axios.get(`${root}series/title`, criterioBusqueda);
    // return await axios.get(`${root}videos ${title}`);
    return await axios.get(`${root}videos/title/${title}`);
}

//llamadas de pictogramas
export const postNewFavorite = async () => {

}
export const userFavorites = async () => {

}
export const getAllFavorites = async () => {

}
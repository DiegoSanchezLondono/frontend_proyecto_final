

import React, { useState, useEffect } from 'react';
import './Profile.css';

import { useNavigate } from 'react-router-dom';

//Imports de RDX
//primero importo métodos que me permitirán conectarme para leer y modificar en redux
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { userFavorites } from '../../../services/apiCalls';

export const Profile = () => {

    //Instancio useNavigate
    const navigate = useNavigate();

    const [favorites, setFavorites] = useState([]);
    //Instancio RDX
    const userRDX = useSelector(userData);

    useEffect(()=>{

        if(userRDX.userPass.token === ''){
            navigate("/");
        } else {
            //A este else entraremos si SI que tenemos el token....
            userRDX.userPass
        }
    },[]);



useEffect(() => {
    if (favorites.length === 0){
        
        setTimeout(()=>{
            
            userFavorites(userRDX.userPass.token, userRDX.userPass.user._id)
            
           
            .then(
                resultado => {
              
                    setFavorites(resultado.data)
                  
                }
            )
            .catch(error => console.log(error));
        }, 500);
    }
}, [favorites]);

    return (
        <>
        <div className='profileDesign'>
            <h2>DATOS DE USUARIO</h2>
            <div>
               Nombre:
            </div>
            <div  className='dataDesign'>
               {userRDX.userPass.user.name}
            </div>
            <div>
                Apellidos:
            </div>
            <div className='dataDesign'>
                {userRDX.userPass.user.surname}
            </div>
            <div>
                Email:
            </div>
            <div className='dataDesign'>
                {userRDX.userPass.user.email}
            </div>
            <div>
                Pais:
            </div>
            <div className='dataDesign'>
                {userRDX.userPass.user.country}
            </div>
            <div>
                <h2>MIS FAVORITOS</h2>
            </div>
            <div className='dataDesign'>
           
            {favorites.length > 0 &&
               favorites.map(
              
                    video => {
                        return (
                            
                            <div key={video._id}>  
                                <table>     
                                    <tbody>
                                        <tr>
                                            <td> Titulo:
                                                {video.titleVideo}
                                            </td>
                                            <td> Fecha:
                                                {video.fecha}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div>                             
                        )
                    }
                )
            }
            </div>
            <div className='dataDesign'>
           
           {favorites.length > 0 &&
              favorites.map(
             
                   pictogram => {
                       return (
                           <div key={pictogram._id}>  
                               <table>     
                                   <tbody>
                                       <tr>
                                           <td> Nombre:
                                               {pictogram.namePictogram}
                                           </td>
                                           <td> Fecha:
                                               {pictogram.fecha}
                                           </td>
                                       </tr>
                                   </tbody>
                               </table> 
                           </div>                             
                       )
                   }
               )
           }
           </div>
        </div>
        </>
    )
}
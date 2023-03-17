
import React, { useState, useEffect } from 'react';
import './Admin.css';

import {useNavigate} from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { getAllFavorites } from '../../../services/apiCalls';



export const Admin = () => {

    const detailUsr = useSelector(userData);

    //Instancio useNavigate
    const navigate = useNavigate();

    //Instancio RDX
    const userRDX = useSelector(userData);

    
    const [allFavorites, setAllFavorites] = useState([]);

    useEffect(()=>{
        //Me conecto a redux para ver las credenciales de usuario y comprobar que su rol es admin...
        if(userRDX.userPass.user.rolId !== '63fdf0deffab09e161f5bfb8'){
            console.log(userRDX.userPass.user.rolId, 'esto esta en admin.jsx')
            navigate("/");
        }

    },[])

    useEffect(()=>{
   if(allFavorites.length === 0){
    getAllFavorites(detailUsr.userPass.token)
    .then(resultado => {
        //seteo el hook de los usuarios...
        setAllFavorites(resultado.data);
    })
   }
},[ allFavorites]);

    return (
        <>
        <div className='adminDesign'>
          {allFavorites.length > 0 &&
                allFavorites.map(
                    video => {
                        return (
                            <div className='favoriteVideo'>
                                <div><strong>Titulo:</strong>{video.videoId.title}</div> 
                               
                                <div><strong>Usuario:</strong>{video.userId.name} {video.userId.surname}</div>
                               
                                <div><strong>Fecha:</strong>{video.fecha}</div>
                            </div>
          
                        )
                    }
                )
            }
        </div>
        <div className='adminDesign'>
          {allFavorites.length > 0 &&
                allFavorites.map(
                    pictogram => {
                        return (
                            <div className='favoritePictogram'>
                                <div><strong>Nombre:</strong>{pictogram.pictogramId.keyword}</div> 
                               
                                <div><strong>Usuario:</strong>{pictogram.userId.name} {pictogram.userId.surname}</div>
                               
                                <div><strong>Fecha:</strong>{pictogram.fecha}</div>
                            </div>
          
                        )
                    }
                )
            }
        </div>
        </>
    )
};
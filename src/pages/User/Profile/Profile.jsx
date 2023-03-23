

import React, { useState, useEffect } from 'react';
import './Profile.css';

import { useNavigate } from 'react-router-dom';

//Imports de RDX
//primero importo métodos que me permitirán conectarme para leer y modificar en redux
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { getAllFavoritesUser } from '../../../services/apiCalls';

export const Profile = () => {

    //Instancio useNavigate
    const navigate = useNavigate();

    const [myFavoritesVideo, setFavoritesVideo] = useState([]);
    const [myFavoritesPictogram, setFavoritesPictogram] = useState([]);
    //Instancio RDX
    const userRDX = useSelector(userData);

    useEffect(() => {

        if (userRDX.userPass.token === '') {
            navigate("/");
        } else {
            //A este else entraremos si SI que tenemos el token....
            userRDX.userPass
        }
    }, []);



    useEffect(() => {
        if (myFavoritesVideo.length === 0) {

            setTimeout(() => {

                getAllFavoritesUser(userRDX.userPass.token, 'video')
                    .then(
                        resultado => {
                            setFavoritesVideo(resultado.data)
                        }
                    )
                    .catch(error => console.log(error));
            }, 500);
        }
    }, [myFavoritesVideo]);

    useEffect(() => {
        if (myFavoritesPictogram.length === 0) {

            setTimeout(() => {

                getAllFavoritesUser(userRDX.userPass.token, 'pictogram')
                    .then(
                        resultado => {
                            setFavoritesPictogram(resultado.data)
                        }
                    )
                    .catch(error => console.log(error));
            }, 500);
        }
    }, [myFavoritesPictogram]);

    return (
        <>
        <div className='container-flex'>
            <div className='profileDesign'>
                <h2>DATOS DE USUARIO</h2>
                <div>
                    Nombre:
                </div>
                <div className='dataDesign'>
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
            </div>
            <div className='profileDesign2'>
                <div>
                    <h2>MIS FAVORITOS</h2>
                </div>
                <div className='dataDesign2'>
                    {myFavoritesVideo.length > 0 &&
                        myFavoritesVideo.map(

                            video => {
                                return (
                                    <div key={video.id}>
                                        <div className='titulos'>
                                            TITULO DEL VIDEO:
                                        </div>
                                        <div>
                                            {video.videoId.title}
                                        </div>
                                        <div className='titulos'>
                                            IMAGEN DESCRIPTIVA:
                                        </div>
                                        <div>
                                            <img className='urlDesign' src={`http://img.youtube.com/vi/${video.videoId.idYoutube}/1.jpg`}/>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <div className='dataDesign2'>
                    {myFavoritesPictogram.length > 0 &&
                        myFavoritesPictogram.map(

                            pictogram => {
                                return (
                                    <div key={pictogram.id}>
                                       <div className='titulos'>
                                            NOMBRE DEL PICTOGRAMA:
                                       </div>
                                       <div>
                                            {pictogram.pictogram}
                                       </div>
                                       <div className='titulos'>
                                            IMAGEN DESCRIPTIVA:
                                       </div>
                                       <div>
                                            <img className='urlDesign' src={`https://api.arasaac.org/api/pictograms/${pictogram.pictogramId}`}/>
                                       </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}
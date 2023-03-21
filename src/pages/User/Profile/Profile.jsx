

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

    const [myFavorites, setFavorites] = useState([]);
    //Instancio RDX
    const userRDX = useSelector(userData);
console.log(userRDX, 'esto es userData')
    useEffect(() => {

        if (userRDX.userPass.token === '') {
            navigate("/");
        } else {
            //A este else entraremos si SI que tenemos el token....
            userRDX.userPass
        }
    }, []);



    useEffect(() => {
        if (myFavorites.length === 0) {

            setTimeout(() => {

                userFavorites(userRDX.userPass.token, userRDX.userPass.user._id)
                    .then(
                        resultado => {
                            console.log(resultado, 'llllllll');
                            setFavorites(resultado.data)
                        }
                    )
                    .catch(error => console.log(error));
            }, 500);
        }
    }, [myFavorites]);

    return (
        <>
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
                <div>
                    <h2>MIS FAVORITOS</h2>
                </div>
                <div className='dataDesign'>
{console.log(myFavorites, 'esto son mis favoritos')}
                    {myFavorites.length > 0 &&
                        myFavorites.map(

                            video => {
                                return (
                                    <div key={video.id}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td> Titulo:
                                                        {video.title}
                                                    </td>
                                                    <td> Fecha:
                                                        {video.date}
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

                    {myFavorites.length > 0 &&
                        myFavorites.map(

                            pictogram => {
                                return (
                                    <div key={pictogram.id}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td> Nombre:
                                                        {pictogram.name}
                                                    </td>
                                                    <td> Fecha:
                                                        {pictogram.date}
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
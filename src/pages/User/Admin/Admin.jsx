
import React, { useState, useEffect } from 'react';
import './Admin.css';

import { useNavigate } from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { getAllUsers } from '../../../services/apiCalls';



export const Admin = () => {
    const detailUsr = useSelector(userData);
    //Instancio useNavigate
    const navigate = useNavigate();
    //Instancio RDX
    const userRDX = useSelector(userData);

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        //Me conecto a redux para ver las credenciales de usuario y comprobar que su rol es admin...
        if (userRDX.userPass.user.rolId !== '63fdf0deffab09e161f5bfb8') {
            navigate("/");
        }
    }, [])

    useEffect(() => {
        if (allUsers.length == 0) {
            getAllUsers(detailUsr.userPass.token)
                .then(resultado => {
                    //seteo el hook de los usuarios...
                    setAllUsers(resultado.data);
                })
        }
    }, [allUsers]);

    return (
        <div className='adminDesign'>
            {allUsers.length > 0 &&
                allUsers.map(
                    user => {
                        return (
                            <div className='user'>
                                <div><strong>Nombre: </strong>{user.name} {user.surname}</div>
                                <div><strong>Email: </strong>{user.email}</div>
                                <div><strong>Pais de Residencia: </strong>{user.country}</div>
                            </div>

                        )
                    }
                )
            }
        </div>
    )
};
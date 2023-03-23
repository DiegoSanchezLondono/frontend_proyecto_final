
import React, { useState } from 'react';
import './PictogramDetail.css';

import { useNavigate } from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { pictogramData } from '../pictogramSlice';
import { userData } from '../User/userSlice';
import { postNewFavorite } from '../../services/apiCalls';

export const PictogramDetail = () => {


    const detailRdx = useSelector(pictogramData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();
console.log(detailRdx, 'esto es lo que tengo del pictograma en detail');
    //Hooks
    const [msg, setMsg] = useState('');

    //Funciones....
    const Like = () => {

        let body = {

             pictogramId : detailRdx.P._id,
             userId : detailUsr.userPass.user._id,

        }
        console.log(detailRdx.P._id, 'hola');

        postNewFavorite(body, detailUsr.userPass.token)
            .then(resultado => {
                //Esto se ejecutará si el pedido se ha realizado correctamente
                //mostrando el mensaje

                setMsg(resultado.data.Message);

                //Después de haber realizado el pedido, llevamos al user a su perfil
                setTimeout(()=>{

                    navigate('/profile');
                },750);
                
            })
            .catch(error => {

                setMsg(error.message);
            });
    }
    return (
        <div className='pictogramDesign'>
            {detailRdx.choosen.id !== '' &&
            
                <div className='pictogramDetailCard'>
                    <div className='namePictogram'>{detailRdx.P.keywords[0].keyword}</div> 
                    <div><img className='detailId' src={`https://api.arasaac.org/api/pictograms/${detailRdx.P._id}`}/></div>
                    <div>{detailRdx.P.keywords[0].meaning !== '' ? detailRdx.P.keywords[0].meaning : "No tiene descripcion"}</div>

                    {/* En caso de que el usuario esté logeado, es decir, tenemos sus credenciales en REDUX, mostraremos
                    un boton para poder alquilar la película */}

                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>Like()} className='likeDesign'>LIKE</div>
                    }
               
                </div>
            
            }
        </div>
    )

};
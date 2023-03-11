
import React, { useState } from 'react';
import './PictogramDetail.css';

import dayjs from 'dayjs';

import { useNavigate } from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { pictogramData } from '../pictogramSlice';
import { userData } from '../User/userSlice';
import { _id_default } from '../../services/utiles';
import { postnewFavorite } from '../../services/apiCalls';

export const PictogramDetail = () => {


    const detailRdx = useSelector(pictogramData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();

    //Hooks
    const [msg, setMsg] = useState('');

    //Funciones....
    const like = () => {

        let body = {

            //id del pictograma...
            idPictogram : detailRdx.choosen._id,
            idUser : detailUsr.userPass.user._id,
            keywordPictogram : detailRdx.choosen.keyword,
            fecha : dayjs().format('MM/DD/YYYY')
        }
        // console.log(detailUsr.userPass.token);
        // console.log(detailRdx);

        postnewFavorite(body, detailUsr.userPass.token)
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
                    <div>{detailRdx.choosen.keyword}</div>
                    <div><img className='detailImage' src={`${_id_default}${detailRdx.choosen._id_path}`}/></div>
                    <div>{detailRdx.choosen.meaning !== '' ? detailRdx.choosen.meaning : "No tiene descripcion"}</div>

                    {/* En caso de que el usuario esté logeado, es decir, tenemos sus credenciales en REDUX, mostraremos
                    un boton para poder añadir el pictograma a favoritos */}

                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>like()} className='likeDesign'>LIKE</div>
                    }
                     <div>{msg}</div> 
                </div>
            }
        </div>
    )
};
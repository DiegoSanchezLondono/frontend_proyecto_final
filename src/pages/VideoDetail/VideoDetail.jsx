
import React, { useState } from 'react';
import './VideoDetail.css';

import dayjs from 'dayjs';

import { useNavigate } from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { videoData } from '../videoSlice';
import { userData } from '../User/userSlice';
import { url_default } from '../../services/utiles';
import { postNewFavorite } from '../../services/apiCalls';

export const VideoDetail = () => {

    const detailRdx = useSelector(videoData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();
    
    //Hooks
    const [msg, setMsg] = useState('');

    //Funciones....
    const like = () => {

        let body = {

            //id del video...
            videoId : detailRdx.choosen._id,
            userId : detailUsr.userPass.user._id,
        }

        postNewFavorite(body, detailUsr.userPass.token)
            .then(resultado => {
                //Esto se ejecutará si el pedido se ha realizado correctamente
                //mostrando el mensaje
                console.log(resultado, 'hjhjhjhjhjhjh');
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
        <div className='videoDesign'>
            {detailRdx.choosen.id !== '' &&
                <div className='videoDetailCard'>
                    <iframe width="560" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${detailRdx.choosen.idYoutube}`} 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                    {/* <div><img className='detailUrl' src={`http://img.youtube.com/vi/${detailRdx.choosen.idYoutube}/1.jpg`}/></div>   */}
                    <div>{detailRdx.choosen.title}</div>
                    <div>{detailRdx.choosen.summary !== '' ? detailRdx.choosen.summary : "No tiene descripcion"}</div>

                    {/* En caso de que el usuario esté logeado, es decir, tenemos sus credenciales en REDUX, mostraremos
                    un boton para poder añadir el video a favoritos */}

                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>like()} className='likeDesign'>LIKE</div>
                    }
                     {/* <div>{msg}</div>  */}
                </div>
            }
        </div>
    )
};

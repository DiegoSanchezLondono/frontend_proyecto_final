
// import React, { useState } from 'react';
// import './PictogramDetail.css';

// import dayjs from 'dayjs';

// import { useNavigate } from 'react-router-dom';

// //Imports RDX
// import { useSelector } from "react-redux";
// import { pictogramData } from '../pictogramSlice';
// import { userData } from '../User/userSlice';
// import { postNewFavorite } from '../../services/apiCalls';

// export const PictogramDetail = () => {


//     const detailRdx = useSelector(pictogramData);
//     const detailUsr = useSelector(userData);
//     const navigate = useNavigate();

//     console.log(detailRdx, 'esto es pictogramData');
//     console.log(detailUsr, 'esto es userData');

//     //Hooks
//     const [msg, setMsg] = useState('');

//     //Funciones....
//     const like = () => {

//         let body = {

//             //id del pictograma...
//             idPictogram : detailRdx.choosen._id,
//             idUser : detailUsr.userPass.user._id,
//             keywordPictogram : detailRdx.choosen.keyword,
//             date : new Date()
//             // fecha : dayjs().format('MM/DD/YYYY')
//         }

//         postNewFavorite(body, detailUsr.userPass.token)
//             .then(resultado => {
//                 //Esto se ejecutará si el pedido se ha realizado correctamente
//                 //mostrando el mensaje
//                 setMsg(resultado.data.Message);
//                 //Después de haber realizado el pedido, llevamos al user a su perfil
//                 setTimeout(()=>{
//                     navigate('/profile');
//                 },750);
//             })
//             .catch(error => {
//                 setMsg(error.message);
//             });
//     }
//     return (
//         <div className='pictogramDesign'>
//             {detailRdx.choosen._id !== '' &&
//                 <div className='pictogramDetailCard'>
//                     <div>{detailRdx.choosen.keyword}</div>
//                     <div><img className='detailImage' src={`${_id_default}${detailRdx.choosen._id_path}`}/></div>
//                     <div>{detailRdx.choosen.meaning !== '' ? detailRdx.choosen.meaning : "No tiene descripcion"}</div>

//                     {/* En caso de que el usuario esté logeado, es decir, tenemos sus credenciales en REDUX, mostraremos
//                     un boton para poder añadir el pictograma a favoritos */}

//                     {detailUsr.userPass.token !== '' &&
                    
//                         <div onClick={()=>like()} className='likeDesign'>LIKE</div>
//                     }
//                      <div>{msg}</div> 
//                 </div>
//             }
//         </div>
//     )
// };

import React, { useState } from 'react';
import './PictogramDetail.css';

import { useNavigate } from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { pictogramData } from '../pictogramSlice';
import { userData } from '../User/userSlice';
import { postNewFavorite } from '../../services/apiCalls';
// import { url_default } from  '../../services/utiles'
export const PictogramDetail = () => {


    const detailRdx = useSelector(pictogramData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();
console.log(detailRdx, 'lo que tengo de pictograma');
    //Hooks
    const [msg, setMsg] = useState('');

    //Funciones....
    const Like = () => {

        let body = {

            //id del pictograma...
             idPictogram : detailRdx.choosen._id,
             idUser : detailUsr.userPass.user._id,
             keywordPictogram : detailRdx.choosen.keyword,
             date : new Date()
             // fecha : dayjs().format('MM/DD/YYYY')
        }
        // console.log(detailUsr.userPass.token);
        // console.log(detailRdx);

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
                    <div>{detailRdx.choosen.keyword}</div>
                    <div><img className='detailId' src={`https://api.arasaac.org/api/pictograms/${detailRdx.choosen.id}`}/></div>
                    <div>{detailRdx.choosen.meaning !== '' ? detailRdx.choosen.meaning : "No tiene descripcion"}</div>

                    {/* En caso de que el usuario esté logeado, es decir, tenemos sus credenciales en REDUX, mostraremos
                    un boton para poder alquilar la película */}

                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>Like()} className='likeDesign'>LIKE</div>
                    }
                     <div>{msg}</div> 
               
                </div>
            
            }
        </div>
    )

};
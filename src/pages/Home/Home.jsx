import React, { useState, useEffect } from 'react';
import { CardVideo } from '../../common/CardVideo/CardVideo';
import { getVideos } from '../../services/apiCalls';

import './Home.css';

import Loading from './loading.gif';

import { useNavigate } from 'react-router-dom';

//RDX imports......
import { useSelector, useDispatch } from "react-redux";
import { videoData, select } from '../videoSlice';

export const Home = () => {

    //Instancias de Redux........

    //Instanciamos dispatch para poder ejecutar accionces en el estado de Redux
    const dispatch = useDispatch();

    //Instanciamos los datos de los videos desde Redux
    const datosReduxVideos = useSelector(videoData);
    console.log(datosReduxVideos, 'paaaaaaaaaaaa');

    //Instanciamos useNavigate en navigate para poder movernos por el router
    const navigate = useNavigate();

    const [videos, setVideos] = useState([]);

    useEffect(() => {

        if (videos.length === 0) {

            setTimeout(() => {

                getVideos()
                    .then(
                        resultado => {
                            setVideos(resultado.data);
                        }
                    )
                    .catch(error => console.log(error, 'tatatatata'));

            }, 1000);

        };

    }, [videos]);


    const Choosen = (video) => {

        //El primer paso ahora será guardar en Redux el video escogido
        dispatch(select({ choosen: video }))

        //Después de haber guardado ....... redirecciono a la vista o container del detalle de serie

        setTimeout(() => {
            navigate("/detailVideo");
        }, 250);

    }

    return (
        <div className='homeDesign'>

            {datosReduxVideos.videos.length > 0 ? (

                //Si entramos aqui es porque tenemos videos de Redux....

                <div className='rosterDesign'>
                    {datosReduxVideos.videos.map(
                        video => {
                            return (
                                <div onClick={() => Choosen(video)} key={video.id}>
                                    <CardVideo video={video} />
                                </div>
                            )
                        }
                    )}
                </div>


            ) :

                (


                    videos.length > 0 ? (

                        // Ya que el hook si contiene los videos, es momento de mapearlos
                        // y poder mostrarlos en pantalla

                        <div className='rosterDesign'>
                            {videos.map(
                                video => {
                                    return (
                                        <div onClick={() => Choosen(video)} key={video.id}>
                                            <CardVideo video={video} />
                                        </div>
                                    )
                                }
                            )}
                        </div>

                    ) : (

                        <div><img className="loadingGif" src={Loading} alt="Cargando" /></div>

                    )

                )

            }

        </div>
    );
};


import React from 'react';
import { image_default } from '../../services/utiles';
import './CardVideo.css';

export const CardVideo = ({video}) => {
    
    return (
        <div className='cardVideoDesign'>
            <div><img className='urlDesign' src={`${url_default}${video.url_path}`}/></div>
            <div className='text'>{video.title !== '' ? video.title : "Video no disponible"}</div>
            <div>{video.summary !== '' ? video.summary : "TBA"}</div>
        </div>
    )
}

import React from 'react';
import { url_default } from '../../services/utiles';
import './CardVideo.css';

export const CardVideo = ({video}) => {
    
    return (
        <div className='cardVideoDesign'>
            <div>
                <a href={`${url_default}${video.url_path}`}>
                    <img className='urlDesign' src={`http://img.youtube.com/vi/${video.idYoutube}/1.jpg`}/>
                </a>
            </div>
            <div className='text'>{video.title !== '' ? video.title : "Video no disponible"}</div>
        </div>
    )
}
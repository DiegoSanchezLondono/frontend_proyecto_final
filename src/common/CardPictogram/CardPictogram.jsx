
import React from 'react';
import { image_default } from '../../services/utiles';
import './CardPictogram.css';

export const CardPictogram = ({pictogram}) => {
    
    return (
        <div className='cardPictogramDesign'>
            <div className='text'>{pictogram.keyword !== '' ? pictogram.keyword : "Pictograma no disponible"}</div>
            <div><img className='imageDesign' src={`${image_default}${pictogram.image_path}`}/></div>
            <div>{pictogram.meaning !== '' ? pictogram.meaning : "TBA"}</div>
        </div>
    )
}
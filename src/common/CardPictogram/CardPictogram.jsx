
import React from 'react';
import { _id_default } from '../../services/utiles';
import './CardPictogram.css';

export const CardPictogram = ({pictogram}) => {
    
    return (
        <div className='cardPictogramDesign'>
            <div className='text'>{pictogram.keyword !== '' ? pictogram.keyword : "Pictograma no disponible"}</div>
            <div><img className='imageDesign' src={`${_id_default}${pictogram._id_path}`}/></div>
            <div>{pictogram.meaning !== '' ? pictogram.meaning : "TBA"}</div>
        </div>
    )
}
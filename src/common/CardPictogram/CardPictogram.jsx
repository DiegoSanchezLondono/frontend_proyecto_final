
import React from 'react';
import './CardPictogram.css';

export const CardPictogram = ({ pictogram }) => {

    return (
        <div className='cardPictogramDesign'>

            <img className='urlDesign' src={`https://api.arasaac.org/api/pictograms/${pictogram._id}`} />
            <div key={pictogram._id}>{pictogram.keywords[0].keyword}</div>

        </div>
    )
}
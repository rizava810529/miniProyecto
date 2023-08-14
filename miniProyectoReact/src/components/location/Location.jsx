import React, { useState } from 'react';
import posicion from "../../img/posicion.png"
import "../location/Location.css"


const Location = () => {
    const [selectedText, setSelectedText] = useState('Helsinki, Finland');

    const handleDivClick = (text) => {
        setSelectedText(text);
    };

    return (
        <div className='h-100 d-flex flex-column justify-content-center align-items-start gap-3'> 
            <div className='texto'>
                <input
                    type="text"
                    value={selectedText}
                    readOnly
                />
            </div>
            <div className='texto'  onClick={() => handleDivClick('Helsinki, Finland')}>
                <img src={posicion} className="img-fluid size" alt="Logo" />Helsinki, Finland
            </div>
            <div className='texto'  onClick={() => handleDivClick('Turku, Finland')}>
                <img src={posicion} className="img-fluid size" alt="Logo" />Turku, Finland
            </div>
            <div className='texto'  onClick={() => handleDivClick('Vaasa, Finland')}>
                <img src={posicion} className="img-fluid size" alt="Logo" />Vaasa, Finland
            </div>
            <div className='texto'  onClick={() => handleDivClick('Oulu, Finland')}>
                <img src={posicion} className="img-fluid size" alt="Logo" />Oulu, Finland
            </div>
            <div>
                {selectedText !== 'Helsinki, Finland' && (
                    <p>{}</p>
                )}
            </div>
        </div>
    );
};

export default Location;

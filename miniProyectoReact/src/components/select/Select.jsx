import React, { useState } from 'react';

function Select() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const aumentarContador1 = () => {
    setContador1(contador1 + 1);
  };

  const disminuirContador1 = () => {
    setContador1(contador1 - 1);
  };

  const aumentarContador2 = () => {
    setContador2(contador2 + 1);
  };

  const disminuirContador2 = () => {
    setContador2(contador2 - 1);
  };

  return (
    <div className=' gap-3 m-2'>
      {/* Mostrar el conteo de contador1 y contador2 aquí */}
      <div className='h-100 d-flex justify-content-between align-items-center gap-2'>
        <p>Adult {contador1}</p>
        <p>Children {contador2}</p>
      </div>

      <div className=''>
        <p className='  texto'>Adult </p>
        <p className='texto'>Age 13 or above </p>
        <div className='h-100 d-flex justify-content-between align-items-center gap-2'>
          <button className="style" onClick={disminuirContador1}>-</button>
          <p className=''>{contador1}</p>
          <button className="style" onClick={aumentarContador1}>+</button>
        </div>
      </div>

      <div className=''>
        <p className='texto'>Children</p>
        <p className='texto'>Age 2-12</p>
        <div className='h-100 d-flex justify-content-between align-items-center gap-2'>
          <button className="style" onClick={disminuirContador2}>-</button>
          <p className='h-'>{contador2}</p>
          <button className="style" onClick={aumentarContador2}>+</button>    
        </div>
      </div>
    </div>
  );
}

export default Select;
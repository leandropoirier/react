import React, { useEffect } from 'react'
import { useState } from 'react';

export const ItemCount = ({stock,cuentaInicial,onAdd}) => {
    const [contador,setContador] = useState(parseInt(cuentaInicial));

    const decrease = ()=>{
        setContador(contador -1);
    }

    const increase = ()=>{
        setContador(contador + 1);
    }

    useEffect (() =>{
        setContador(parseInt(cuentaInicial));
    },[cuentaInicial])


    return (
        <div className='contaner'>
            <p className='cantidad'>Cantidad</p>
            <button className="btn btn-danger" disabled={contador <= 1} onClick={decrease}>-</button>
            
            {contador}
            
            <button className="btn btn-primary" disabled={contador >= stock} onClick={increase}>+</button>
            
            <br/>
            
            <button className="btn btn-success" onClick={()=> onAdd(contador)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount

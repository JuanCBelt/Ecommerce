import React from 'react';
import IMG from "../../images/img01.jpg"

export const ProductosLista = () => {
    return (
        <>
        <h1 className='title'>PRODUCTOS</h1>
        <div className='productos'>
            <a href='#'>
            <div className='producto'>
                <img src={IMG}></img>
            </div>
            </a>
            <div className='productos__footer'>
            <h1>Title</h1>
            <p>Categoria</p>
            <p className='price'>$320</p>
            </div>
            <div className='buttom'>
                <button className='btn'>
                    Añadir al carrito
                </button>
                <div>
                <a href='#' className='btn'>Vista</a>
                </div>
            </div>
        </div>
        </>
    )
}


import React, { useState } from 'react'
import './Carro.css'

function Carro(props) {

    let btnClasses = 'btn-comprar '
    btnClasses += props.azul ? 'azul' : '' 
    btnClasses += props.verde ? 'verde' : ''
    btnClasses += props.amarelo ? 'amarelo' : ''

    return (
      <>
        <li className='item'>
            <div className='modelo'>{props.modelo}</div>
            <div className='marca'>{props.marca}</div>
            <div className='cor'>{props.cor}</div>
            <div className='ano'>{props.ano}</div>
            <div className='portas'>{props.portas}</div>
            <div className='combustivel'>{props.combustivel}</div>
            <div className='cambio'>{props.cambio}</div>
            <div className='tem_aro'>{props.tem_aro}</div>
            <div className='potencia'>{props.potencia}</div>
            <div className='preco'>{props.preco}</div>
            <button className={btnClasses}>Comprar</button> 
        </li>
      </>
    )
}

export default Carro
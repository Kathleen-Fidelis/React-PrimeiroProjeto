import React, { useState } from 'react'
import './Produto.css'

function Produto(props) {

    let btnClasses = 'btn-comprar '
    btnClasses += props.azul ? 'azul' : '' 
    btnClasses += props.verde ? 'verde' : ''
    {/* Se existir azul, ele vai concatenar com a btn-comprar*/}

    return (
      <>
        <li className='item'>
            <div className='nome'>{props.nome}</div>
            <div className='marca'>{props.marca}</div>
            <div className='valor'>{props.valor}</div>
            <button className={btnClasses}>Comprar</button> {/* Aplicação de estilos diferentes no mesmo botão*/}
        </li>
      </>
    )
}

export default Produto
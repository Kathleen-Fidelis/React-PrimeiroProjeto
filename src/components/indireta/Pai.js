import React, { useState } from 'react'
import Filho from '../indireta/Filho'

function Pai(props) {

    const [texto, setTexto] = useState("") //Definindo o estado inicial
    const [num, setNum] = useState(0)

    function setValores(texto, numero){
        setTexto(texto)
        setNum(numero)
    }

    return (
      <>
        <h2>{texto} {num}</h2>
        <Filho funcao={setValores}></Filho>
      </>
    )
}

export default Pai
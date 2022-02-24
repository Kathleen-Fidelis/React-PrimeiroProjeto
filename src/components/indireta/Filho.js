import React, { useState } from 'react'

function Filho(props) {

    function gerarNumero(){
        return Math.random()
    }

    return (
      <>
        <button onClick={function(){
            const n = gerarNumero()
            props.funcao('O valor é: ', n) //Passa os dados para o Pai através dos parâmetros da função
        }}>Executar</button>
      </>
    )
}

export default Filho
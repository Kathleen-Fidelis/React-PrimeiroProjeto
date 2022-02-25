import React, { useState } from 'react'

function Filho(props) {

    function gerarNumero(){
        return Math.random()
    }

    return (
      <>
        <button onClick={function(){  //é passado dentro de uma arrow function, pq se não ele vai executar direto, assim q a página for carregada
            const n = gerarNumero()
            props.funcao('O valor é: ', n) //Passa os dados para o Pai através dos parâmetros da função
        }}>Executar</button>
      </>
    )
}

export default Filho
import React, { useState } from 'react'

 function ParImpar({props}) {  //{num = 0} => posso desestruturar a props aqui, se props não exixtir o padrão será 0aqui em cima

    let numero = 0
    numero = props.num ? props.num : 0

    return (
      <div>
            <h2>O resultado é: </h2>
            {numero % 2 == 0  //Renderização condicional
                ? <h3>par</h3> 
                : <h3>ímpar</h3>
            }
      </div>
    )
}

export default ParImpar
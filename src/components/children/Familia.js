import React, { useState } from 'react'
import Membro from './Membro'

function Familia(props) {

    return (
      <>
        <h2>[Início] Membros da família</h2>
            {/* <Membro nome="Kathleen" sobrenome="Fidelis"></Membro> */}
             {props.children}   {/* Proporciona colocar algo dentro de uma instancia lá no app */}
        <h2>[Fim] Membros da família</h2>
      </>
    )
}

export default Familia
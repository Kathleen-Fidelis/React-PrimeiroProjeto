import React, { useState } from 'react'
import If from './If'

function UsuarioLogado(props) {

    const usuario = props.usuario || {}

    return (
      <>
        <If test={usuario && usuario.nome && usuario.email}>
          <h2>Usuário logado</h2>
          <h3>
              {usuario.nome} - {usuario.email}
          </h3>
        </If>

        <If test={!usuario || !usuario.nome || !usuario.email}>
          <h2>
            Bem vindo, <a href="#">Faça seu login</a>
          </h2>
        </If>
      </>
    )
}

export default UsuarioLogado
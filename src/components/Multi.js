/* Função anônima e default, por ela ser default, não precisa necessariamente ter nome */
export default function() {             
    return <h2>Componente Padrão</h2>
}

/* Função com o export direto */
export function Component1() {
    return <h2>Component 1</h2>
}

/* Função com o export direto */
export function Component2() {
    return <h2>Component 2</h2>
}


/* Atribuindo a uma variável */
/* const Multi = function(){
    return <h1>Primeiro Componente</h1>
}

export default Multi */


/* Função anônima e exportando direto */
/* export default function() {
    return <h2>Primeiro Componente</h2>
}
 */


/* Usando arrow function */
/* export default () => {
    return <h2>Primeiro Componente</h2>
} */


/* Usando arrow function com o return implícito */
/* export default () => <h2>Primeiro Componente</h2> */
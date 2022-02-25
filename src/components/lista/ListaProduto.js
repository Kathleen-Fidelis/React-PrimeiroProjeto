import produto from './produto'

function ListaProduto(props) {

    function exibirLista(){
        return produto.map(p => { //Uso o map para percorrer um array e retornar os elementos modificados
            return (
                <li key={p.id}>     {/*O React pede q cada item da lista tenha uma key q não se repete*/}
                    <div>{p.id}</div>
                    <h3>{p.nome}</h3> 
                    <h3>R$ {p.preco}</h3>
                
                </li>
                
            )
        })
    }

    return (
      <>
        <h2>Lista de Produtos</h2>
        <ul>
            {exibirLista()}
        </ul>
      </>
    )
}

export default ListaProduto
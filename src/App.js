import './App.css';
//import Primeiro from './components/Primeiro';
//import ComponentPadrao, {Component1, Component2} from './components/Multi'
//import Estilo from './components/estilos/Estilo'
//import MinMax from './components/MinMax'
//import Titulo from './components/Titulo'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Pessoa from './components/propriedades/Pessoa'
//import Produto from './components/propriedades/produto/Produto'
//import Carro from './components/propriedades/carro/Carro'
//import Pai from './components/direta/Pai'
import Pai from './components/indireta/Pai'

function App() {
  return (
    <div>
       {/* <h1>Primeiro Componente</h1> */}
       {/*<Primeiro></Primeiro> {/* Instância do componente Primeiro */}
        {/* <ComponentPadrao></ComponentPadrao>
        <Component1></Component1>
        <Component2></Component2>
        <Estilo></Estilo> */}
        {/*<MinMax min="2" max="10"></MinMax> {/* Propriedade String */}
        {/*<MinMax min={4} max={15}></MinMax> {/* Propriedade numérica */}
        {/*<Titulo principal="Olá" secundario="tudo bem"></Titulo>
        <Botao></Botao>*/}
        
        {/* <Contador inicial={100} passo={10} limite={300}></Contador>
        <Contador inicial={0} passo={5} limite={1000}></Contador> */}
        
        {/* <Pessoa nome="Kathleen" idade="19" sexo="feminino" estado_civil="solteira"></Pessoa> */}
        
        {/* <ul>
          <Produto nome="teclado" marca="dell" valor="179,00"></Produto>
          <Produto nome="monitor" marca="dell" valor="199,00" azul></Produto>
          <Produto nome="mouse" marca="dell" valor="100,00" verde></Produto>
        </ul> */}

        {/* <ul>
          <Carro modelo="HRV" marca="Honda" cor="vinho" ano="2015" portas="4" combustivel="gasolina" cambio="" tam_aro="16" potencia="167" preco="129.100,00" azul></Carro>
          <Carro modelo="T-Cross" marca="Volkswagen" cor="marrom" ano="2019" portas="4" combustivel="gasolina" cambio="6 marchas" tam_aro="16" potencia="167" preco="108.890,00" verde></Carro>
          <Carro modelo="Ix35" marca="Hyundai" cor="preto" ano="2010" portas="4" combustivel="gasolina" cambio="6 marchas" tam_aro="16" potencia="167" preco="154.990,00" amarelo></Carro>
          <Carro modelo="Renault Sandero" marca="Renault" cor="branco" ano="2007" portas="4" combustivel="gasolina" cambio="6 marchas" tam_aro="16" potencia="167" preco="72.790,00"></Carro>
        </ul> */}

        {/* Comunicação direta */}
        {/* <Pai></Pai> */}

        {/* Comunicação indireta */}
        <Pai></Pai>
    </div>
  );
}

export default App;

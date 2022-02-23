import './App.css';
import Primeiro from './components/Primeiro';
import ComponentPadrao, {Component1, Component2} from './components/Multi'
import Estilo from './components/estilos/Estilo'
import MinMax from './components/MinMax'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'

function App() {
  return (
    <div>
      <h1>Primeiro Componente</h1>
        <Primeiro></Primeiro> {/* Instância do componente Primeiro */}
        <ComponentPadrao></ComponentPadrao>
        <Component1></Component1>
        <Component2></Component2>
        <Estilo></Estilo>
        <MinMax min="2" max="10"></MinMax> {/* Propriedade String */}
        <MinMax min={4} max={15}></MinMax> {/* Propriedade numérica */}
        <Titulo principal="Olá" secundario="tudo bem"></Titulo>
        <Botao></Botao>
        <Contador inicial={100} passo={10} limite={300}></Contador>
        <Contador inicial={0} passo={5} limite={1000}></Contador>
    </div>
  );
}

export default App;

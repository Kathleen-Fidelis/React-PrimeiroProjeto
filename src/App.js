import './App.css';
import Primeiro from './components/Primeiro';
import ComponentPadrao, {Component1, Component2} from './components/Multi'

function App() {
  return (
    <div>
      <h1>Primeiro Componente</h1>
        <Primeiro></Primeiro> {/* Instância do componente Primeiro */}
        <ComponentPadrao></ComponentPadrao>
        <Component1></Component1>
        <Component2></Component2>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Counter from './Componets/Counter';
import FunctionClick from './Componets/FunctionClick';
import EventBind from './Componets/EventBind';
import ParentComponent from './Componets/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <EventBind/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;

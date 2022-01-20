import logo from "./logo.svg";
import "./App.scss";
import Form from "./components/Form";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <header>BASKET-BALL STORE</header>
      <Form />
      <Basket />
    </div>
  );
}

export default App;

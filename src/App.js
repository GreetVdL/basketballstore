import logo from "./logo.svg";
import "./App.scss";
import Form from "./components/Form";
import Basket from "./components/Basket";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([
    { id: nanoid(), brand: "Spalding", quantity: 0, price: 36 },
    { id: nanoid(), brand: "Wilson", quantity: 0, price: 28 },
    { id: nanoid(), brand: "Molten", quantity: 0, price: 31 },
    { id: nanoid(), brand: "Baden", quantity: 0, price: 25 },
  ]);
  const [brand, setBrand] = useState("Spalding");
  const [quantity, setQuantity] = useState(1);

  const onBrandSelection = (basketball) => {
    setBrand(basketball);
  };
  const onQuantitySelection = (amount) => {
    setQuantity(amount);
  };

  return (
    <div className="App">
      <header>BASKETBALL STORE</header>
      <Form
        items={items}
        brand={brand}
        quantity={quantity}
        onBrandSelection={onBrandSelection}
        onQuantitySelection={onQuantitySelection}
      />
      <Basket />
    </div>
  );
}

export default App;

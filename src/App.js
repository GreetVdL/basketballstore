import logo from "./logo.svg";
import "./App.scss";
import Form from "./components/Form";
import Basket from "./components/Basket";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([
    {
      id: nanoid(),
      brand: "Spalding",
      quantity: 0,
      price: 36,
      cumulativeQuantity: 0,
    },
    {
      id: nanoid(),
      brand: "Wilson",
      quantity: 0,
      price: 28,
      cumulativeQuantity: 0,
    },
    {
      id: nanoid(),
      brand: "Molten",
      quantity: 0,
      price: 31,
      cumulativeQuantity: 0,
    },
    {
      id: nanoid(),
      brand: "Baden",
      quantity: 0,
      price: 25,
      cumulativeQuantity: 0,
    },
  ]);
  const [brand, setBrand] = useState("Spalding");
  const [quantity, setQuantity] = useState(1);

  const onBrandSelection = (basketball) => {
    setBrand(basketball);
  };
  const onQuantitySelection = (amount) => {
    setQuantity(amount);
  };
  const onFormSubmit = () => {
    setItems(
      items.map((obj) => {
        if (obj.brand === brand) {
          obj.quantity += quantity;
        }
        return obj;
      })
    );
  };
  const onIncrementClick = () => {
    setItems(
      items.map((obj) => {
        if (obj.brand === brand) {
          obj.quantity = obj.quantity + 1;
        }
        return obj;
      })
    );
  };
  const onDecrementClick = () => {
    setItems(
      items.map((obj) => {
        if (obj.brand === brand) {
          obj.quantity = obj.quantity > 1 ? obj.quantity - 1 : obj.quantity;
        }
        return obj;
      })
    );
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
        onFormSubmit={onFormSubmit}
      />
      <Basket
        items={items}
        onIncrementClick={onIncrementClick}
        onDecrementClick={onDecrementClick}
      />
    </div>
  );
}

export default App;

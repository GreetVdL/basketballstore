import logo from "./logo.svg";
import "./App.scss";
import Form from "./components/Form";
import Basket from "./components/Basket";
import { useState } from "react";
import { nanoid } from "nanoid";
import spalding from "./images/spalding.webp";
import wilson from "./images/wilson.jpg";
import molten from "./images/molten.webp";
import baden from "./images/baden.jpg";

function App() {
  const [items, setItems] = useState([
    {
      id: nanoid(),
      brand: "Spalding",
      quantity: 0,
      price: 36,
      cumulativeQuantity: 0,
      image: spalding,
    },
    {
      id: nanoid(),
      brand: "Wilson",
      quantity: 0,
      price: 28,
      cumulativeQuantity: 0,
      image: wilson,
    },
    {
      id: nanoid(),
      brand: "Molten",
      quantity: 0,
      price: 31,
      cumulativeQuantity: 0,
      image: molten,
    },
    {
      id: nanoid(),
      brand: "Baden",
      quantity: 0,
      price: 25,
      cumulativeQuantity: 0,
      image: baden,
    },
  ]);
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(1);

  const onBrandSelection = (basketball) => {
    if (basketball !== "selectabrand") {
      setBrand(basketball);
    }
  };
  const onQuantitySelection = (amount) => {
    setQuantity(amount);
  };
  const onFormSubmit = () => {
    if (brand === "") return;
    setItems(
      items.map((obj) => {
        if (obj.brand === brand) {
          obj.quantity += quantity;
        }
        return obj;
      })
    );
  };
  const onIncrementClick = (ball) => {
    setItems(
      items.map((obj) => {
        if (obj.brand === ball) {
          obj.quantity = obj.quantity + 1;
        }
        return obj;
      })
    );
  };
  const onDecrementClick = (ball) => {
    setItems(
      items.map((obj) => {
        if (obj.brand === ball) {
          obj.quantity = obj.quantity > 1 ? obj.quantity - 1 : obj.quantity;
        }
        return obj;
      })
    );
  };
  const onDeleteClick = (ball) => {
    setItems(
      items.map((obj) => {
        if (obj.brand === ball) {
          obj.quantity = 0;
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
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
}

export default App;

import "./Basket.scss";
import BasketItem from "./BasketItem";

const Basket = () => {
  return (
    <div className="basket">
      <h2>Basket</h2>
      <ul>
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </ul>
    </div>
  );
};

export default Basket;

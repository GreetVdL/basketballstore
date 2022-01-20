import "./Basket.scss";
import BasketItem from "./BasketItem";

const Basket = ({ items }) => {
  return (
    <div className="basket">
      <h2>Basket</h2>
      <ul>
        {items
          .filter((obj) => obj.quantity > 0)
          .map((obj) => (
            <BasketItem
              key={obj.id}
              brand={obj.brand}
              quantity={obj.quantity}
              price={obj.price}
              cumulQuantity={obj.cumulativeQuantity}
            />
          ))}
      </ul>
    </div>
  );
};

export default Basket;

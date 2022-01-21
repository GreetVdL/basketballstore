import "./Basket.scss";
import BasketItem from "./BasketItem";

const Basket = ({
  items,
  onIncrementClick,
  onDecrementClick,
  onDeleteClick,
}) => {
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
              image={obj.image}
              onIncrementClick={onIncrementClick}
              onDecrementClick={onDecrementClick}
              onDeleteClick={onDeleteClick}
            />
          ))}
      </ul>
      <div class="summary">
        <p>
          Total items:{" "}
          <span>
            {items.reduce((acc, tot) => {
              return acc + tot.quantity;
            }, 0)}
          </span>
        </p>
        <p>
          Total price:{" "}
          <span>
            {items
              .map((item) => item.price * item.quantity)
              .reduce((acc, tot) => {
                return acc + tot;
              }, 0)}
            &nbsp;$
          </span>
        </p>
      </div>
    </div>
  );
};

export default Basket;

import "./BasketItem.scss";
import img from "../images/bb.jpg";

const BasketItem = (props) => {
  const handleIncrementButton = () => {
    props.onIncrementClick();
  };
  const handleDecrementButton = () => {
    props.onDecrementClick();
  };

  return (
    <li>
      <div className="left">
        <img src={img} alt="basketball logo" />
      </div>
      <div className="right">
        <p>
          Brand: <span>{props.brand}</span>
        </p>
        <p>
          Price: <span>{props.price * props.quantity} $</span>
        </p>
        <p>
          Quantity: <span>{props.quantity}</span>
        </p>
        <div className="incdec">
          <button onClick={handleIncrementButton}>+</button>
          <button onClick={handleDecrementButton}>-</button>
        </div>
        <button>DELETE</button>
      </div>
    </li>
  );
};

export default BasketItem;

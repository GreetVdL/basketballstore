import "./BasketItem.scss";

const BasketItem = (props) => {
  const handleIncrementButton = () => {
    props.onIncrementClick(props.brand);
  };
  const handleDecrementButton = () => {
    props.onDecrementClick(props.brand);
  };
  const handleDeleteButton = () => {
    props.onDeleteClick(props.brand);
  };

  return (
    <li>
      <div className="left">
        <img src={props.image} alt="basketball logo" />
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
        <button onClick={handleDeleteButton}>DELETE</button>
      </div>
    </li>
  );
};

export default BasketItem;

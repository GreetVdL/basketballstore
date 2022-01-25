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
          <button
            disabled={props.quantity === 1}
            onClick={handleDecrementButton}
          >
            -
          </button>
          <button onClick={handleIncrementButton}>+</button>
        </div>
        <button onClick={handleDeleteButton}>REMOVE</button>
      </div>
    </li>
  );
};

export default BasketItem;

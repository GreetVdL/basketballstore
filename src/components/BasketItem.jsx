import "./BasketItem.scss";
import img from "../images/bb.jpg";

const BasketItem = () => {
  return (
    <li>
      <div className="left">
        <img src={img} alt="basketball logo" />
      </div>
      <div className="right">
        <p>
          Brand: <span>blabla</span>
        </p>
        <p>
          Price: <span>20 $</span>
        </p>
        <p>Quantity: 10</p>
        <div className="incdec">
          <button>+</button>
          <button>-</button>
        </div>
        <button>DELETE</button>
      </div>
    </li>
  );
};

export default BasketItem;

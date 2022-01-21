import "./Form.scss";
import { useRef } from "react";

const Form = (props) => {
  const formRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit();
    formRef.current.reset();
  };

  const handleBrandSelection = (e) => {
    props.onBrandSelection(e.target.value);
  };
  const handleQuantitySelection = (e) => {
    props.onQuantitySelection(Number.parseInt(e.target.value));
  };

  return (
    <form action="" onSubmit={handleFormSubmit} ref={formRef}>
      <h2>shop basketballs</h2>
      <label htmlFor="brand">Brand:</label>
      <select name="brand" id="brand" onChange={handleBrandSelection}>
        <option value="selectabrand">Select a brand</option>
        <option value="Spalding">Spalding</option>
        <option value="Wilson">Wilson</option>
        <option value="Molten">Molten</option>
        <option value="Baden">Baden</option>
      </select>
      <label htmlFor="quantity">Quantity:</label>
      <input
        value={props.quantity}
        type="number"
        id="quantity"
        min={1}
        onChange={handleQuantitySelection}
      />
      <p>
        Price:&nbsp;
        {(props.brand !== "" &&
          props.quantity *
            props.items.filter((item) => item.brand === props.brand)[0]
              .price) ||
          0}
        &nbsp;$
      </p>
      <button type="submit">ADD TO BASKET</button>
    </form>
  );
};

export default Form;

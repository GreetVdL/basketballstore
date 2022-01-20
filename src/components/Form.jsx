import "./Form.scss";

const Form = () => {
  return (
    <form action="">
      <h2>shop basketballs</h2>
      <label htmlFor="name">Brand:</label>
      <input type="text" id="name" />
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" />
      <label htmlFor="price">Price:</label>
      <input type="number" id="price" />
      <button type="submit">ADD TO BASKET</button>
    </form>
  );
};

export default Form;

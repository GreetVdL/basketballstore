import "./Form.scss";
import { useState, useRef } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: [20, "!important"],
  },
});

const Form = (props) => {
  const formRef = useRef();

  const [isValid, setIsValid] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (props.brand === "") {
      setIsValid(false);
    }
    props.onFormSubmit();
    formRef.current.reset();
  };

  const handleBrandSelection = (e) => {
    setIsValid(true);
    props.onBrandSelection(e.target.value);
  };
  const handleQuantitySelection = (e) => {
    props.onQuantitySelection(Number.parseInt(e.target.value));
  };

  return (
    <form action="" onSubmit={handleFormSubmit} ref={formRef}>
      <h2>shop basketballs</h2>
      {/* <label htmlFor="brand">Brand:</label> */}
      {/* <select name="brand" id="brand" onChange={handleBrandSelection}>
        <option value="selectabrand">Select a brand</option>
        <option value="Spalding">Spalding</option>
        <option value="Wilson">Wilson</option>
        <option value="Molten">Molten</option>
        <option value="Baden">Baden</option>
      </select> */}
      <FormControl fullWidth>
        <InputLabel id="brand-label" style={{ fontSize: "2rem" }}>
          Brand
        </InputLabel>
        <Select
          labelId="brand"
          id="brand"
          value={props.brand}
          label="Brand"
          onChange={handleBrandSelection}
          style={{ fontSize: "2rem" }}
        >
          <MenuItem value="selectabrand" style={{ fontSize: "2rem" }}>
            Select a brand
          </MenuItem>
          <MenuItem value="Spalding" style={{ fontSize: "2rem" }}>
            Spalding
          </MenuItem>
          <MenuItem value="Wilson" style={{ fontSize: "2rem" }}>
            Wilson
          </MenuItem>
          <MenuItem value="Molten" style={{ fontSize: "2rem" }}>
            Molten
          </MenuItem>
          <MenuItem value="Baden" style={{ fontSize: "2rem" }}>
            Baden
          </MenuItem>
        </Select>
      </FormControl>
      {isValid ? null : <p className="check">Please select a brand</p>}
      <label htmlFor="quantity" className="quantity">
        Quantity:
      </label>
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

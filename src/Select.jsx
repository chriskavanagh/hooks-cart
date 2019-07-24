import React from "react";
import range from "lodash/range";

const options = range(1, 6);

const Select = ({ handleChange, quantity }) => {
  return (
    <select
      value={quantity}
      type="number"
      name="quantity"
      onChange={handleChange}
    >
      {options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;

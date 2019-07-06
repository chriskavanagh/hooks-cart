//import React from "react";
import React from "react";
import range from "lodash/range";

const options = range(1, 6);

const Select = ({ handleChange }) => {
  return (
    <select type="number" name="quantity" id="quantity" onChange={handleChange}>
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

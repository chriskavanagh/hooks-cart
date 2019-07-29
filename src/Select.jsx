import React, { useEffect } from "react";
import range from "lodash/range";
import { useStoreActions } from "easy-peasy";

const options = range(1, 6);

const Select = ({ handleChange, quantity }) => {
  const add = useStoreActions(actions => actions.CartModel.addQuantity);

  useEffect(() => {
    add(quantity);
  });
  return (
    <form>
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
    </form>
  );
};

export default Select;

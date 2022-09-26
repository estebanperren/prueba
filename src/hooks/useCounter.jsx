import { useState } from "react";
const UseCounter = () => {
  const [count, setCount] = useState(0);

  function add(stock) {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function substract() {
    if (count > 0) setCount(count - 1);
  }

  return { add, substract, count };
};

export default UseCounter;

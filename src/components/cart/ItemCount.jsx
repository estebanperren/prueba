import React, { useState } from "react";

export default function ItemCount({ articulo }) {

  const [count, setCount] = useState(0);
  function add(stock) {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function substract() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
<div className="count">    
      <a  onClick={() => substract()}>-</a>
      <span >{count}</span>
      <a  onClick={() => add( articulo.stock )}>+</a>
</div>
    </>
  );
}

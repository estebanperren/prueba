import React from "react";
import UseCounter from "../hooks/useCounter";

export default function ItemCount({ articulo, onAdd }) {
  const { add, substract, count } = UseCounter();
  return (
    <>
      <div className="count">
        <a onClick={() => substract()}>-</a>
        <span>{count}</span>
        <a onClick={() => add(articulo.stock)}>+</a>
      </div>
      <p>
        <button
          className="btn btn-primary"
          style={{ margin: "1rem" }}
          onClick={() => onAdd(count, articulo)}
        >
          +AGREGAR
        </button>
      </p>
    </>
  );
}

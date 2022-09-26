import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UseFirebase from "../hooks/useFirebase";
import ItemDetail from "./cards/ItemDetail";
import Loading from "./loading/Loading";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { isLoading, items, getById } = UseFirebase();
  useEffect(() => {
    getById(id);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="container">
        <div className="row">
          <ItemDetail articulos={items} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;

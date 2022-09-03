import React from 'react';
import { useParams } from 'react-router-dom';
import UseConnection from '../hooks/useConnection';
import ItemDetail from './cards/ItemDetail';

const getItem = (id) =>{
    return UseConnection(id)
}
const ItemDetailContainer = () => {
    const {id} = useParams()
    const {isLoading, articulos} = getItem(id)

    return (isLoading ? <h1>Cargando...</h1> : 
        <>
        <div className="container">
  <div className="row">
          <ItemDetail articulos={articulos} />  
        </div>
        </div>
        </>
    );
}

export default ItemDetailContainer;

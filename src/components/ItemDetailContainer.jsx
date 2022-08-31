import React from 'react';
import UseConnection from '../hooks/useConnection';
import ItemDetail from './cards/ItemDetail';

const getItem = (id) =>{
    return UseConnection(id)
}
const ItemDetailContainer = () => {
    return (
        <>
          <ItemDetail articulos={getItem(1)} />  
        </>
    );
}

export default ItemDetailContainer;

import React from 'react';
import UseConnection from '../hooks/useConnection';
import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
        <>
          <ItemList articulos={UseConnection()} />  
        </>
    );
}

export default ItemListContainer;

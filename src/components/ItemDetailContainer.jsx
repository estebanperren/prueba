import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UseFirebase from '../hooks/useFirebase';
import ItemDetail from './cards/ItemDetail';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const {isLoading, items, getById} = UseFirebase()
useEffect(() => {
getById(id)
}, []);

    return (isLoading ? <h1>Cargando...</h1> : 
        <>
        <div className="container">
  <div className="row">
          <ItemDetail articulos={items} />  
        </div>
        </div>
        </>
    );
}

export default ItemDetailContainer;

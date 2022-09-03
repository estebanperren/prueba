import React from 'react';
import { useParams } from 'react-router-dom';
import UseConnection from '../hooks/useConnection';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const {category} = useParams()
  const {isLoading, articulos} = UseConnection(-1, category)
  return isLoading ? <h1>Cargando...</h1> : <ItemList articulos={articulos} />  
        
    
}

export default ItemListContainer;

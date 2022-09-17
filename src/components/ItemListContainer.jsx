import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import UseFirebase from "../hooks/useFirebase";

const ItemListContainer = () => {
  const {category} = useParams()
  const { isLoading, items, getAll, getByCategory} = UseFirebase()
  useEffect(() => {
    if(category)
    getByCategory(category)
    else
getAll()
}, [category]); 
  const articulos= items;
  return isLoading ? <h1>Cargando...</h1> : <ItemList articulos={articulos} />  
        
    
}

export default ItemListContainer;

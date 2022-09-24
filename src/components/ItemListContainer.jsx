import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import UseFirebase from "../hooks/useFirebase";
import Loading from './loading/Loading';

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
  return isLoading ? <Loading /> : <ItemList articulos={articulos} />  
        
    
}

export default ItemListContainer;

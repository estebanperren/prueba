import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../../context/CartContext';

const ItemDelete = ({articuloId, titleShow=true}) => {
const {removeItem} = useContext(CartContext);
    return (
        <>
           <i onClick={()=>removeItem(articuloId)} className={"trash"}> 
           <FontAwesomeIcon icon={faTrashAlt} />
           {titleShow ? "Eliminar" : null} 
            </i>
            
        </>
    );
}

export default ItemDelete;

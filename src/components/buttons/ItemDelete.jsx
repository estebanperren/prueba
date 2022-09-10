import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ItemDelete = ({articuloId, onDel}) => {
    return (
        <>
           <button onClick={()=>onDel(articuloId)} type="button" className="btn btn-danger"> 
           <FontAwesomeIcon icon={faTrashAlt} />
           Eliminar
            </button>
            
        </>
    );
}

export default ItemDelete;

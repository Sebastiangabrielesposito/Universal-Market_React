import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import {getProducto} from '../Services/products'
import {useParams} from 'react-router-dom';
import {getProductosById} from '../app/api';



const ItemDetailContainer = () => {
    const {id} = useParams();

    const [producto, SetProducto] = useState([])
    
    useEffect(() => {
        getProductosById(id).then(data => {
            SetProducto(data)
            
        })
    },[id])
    
    // const BuscarProd = producto.find (prod => prod.id === id)
    return (
        <div>
            { <ItemDetail DetailItem = {producto} />}
        </div>
    );
};

export default ItemDetailContainer;
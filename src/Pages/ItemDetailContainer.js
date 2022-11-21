import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import {getProducto} from '../Services/products'
import {useParams} from 'react-router-dom';



const ItemDetailContainer = () => {
    const {id} = useParams();

    const [producto, SetProducto] = useState([])
    
    useEffect(() => {
        getProducto(id).then(data => {
            SetProducto(data)
        })
    },[id])
    const BuscarProd = producto.find (prod => prod.id === id)
    
    return (
        <div>
            {BuscarProd && <ItemDetail DetailItem = {BuscarProd} />}
        </div>
    );
};

export default ItemDetailContainer;
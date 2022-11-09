import React from 'react';
// import {Link} from 'react-router-dom';
import ItemCount from '../components/ItemCount'


const ItemDetail = ({DetailItem}) => {
    // console.log(DetailItem);
    return (
        <div className='FlexItem'>
            <div className='FlexItem1'>
                <img src={DetailItem.foto} alt="Foto del producto"  className='ItemImg' />
                <p  className='item'>{DetailItem.descripcion}</p>
                <p  className='item'>{DetailItem.marca}</p>
                <div className='precios'>
                    <p key={"4"} className='item-PrecioConDescuento'> {DetailItem.$}{DetailItem.preciocondescuento}</p>
                    <p  className='item-Precio'>${DetailItem.precio}</p>
                </div>
                    <ItemCount />
                    <p  className='ItemCount'>Stock : {DetailItem.stock} </p>
            </div>
        </div>
        
    )
}
export default ItemDetail;
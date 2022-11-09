import React from 'react';
// import ProteinStar from '../assets/img/Protein-Star.webp';
import { Item } from './Item';


export const ItemList = ({products}) => {
// console.log(products);
    return(
        <div className='FlexItemList' >
           {products.map( product => <Item item={product} />)} 
        </div>
    )
}
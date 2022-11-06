import React from 'react';
// import ProteinStar from '../assets/img/Protein-Star.webp';
import { Item } from './Item';


export const ItemList = ({products}) => {
    return(
        <div >
            <Item item={products} />
        </div>
    )
}
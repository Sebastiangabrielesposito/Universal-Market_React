import React from 'react';
import {ItemHome} from '../components/ItemHome'
import '../styles/ItemListHome.css'

export const ItemListHome = ({productos}) => {
    
    
    
    return(
        <div className='FlexItemListHome'>
            {
            // <ItemHome itemProducts={productos} />
            productos.map(prod => <ItemHome itemProducts={prod} />)

            }  
        </div>
    )
}
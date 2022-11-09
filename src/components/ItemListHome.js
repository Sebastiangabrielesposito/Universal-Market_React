import React from 'react';
import {ItemHome} from '../components/ItemHome'


export const ItemListHome = ({productos}) => {
    
    
    
    return(
        <div className='FlexItemList'>
            {
            <ItemHome itemProducts={productos} />
            // productos.map(prod => <ItemHome itemProducts={prod} />)

            }  
        </div>
    )
}
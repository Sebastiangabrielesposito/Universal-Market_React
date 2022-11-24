import React from 'react';
import {ItemHome} from '../components/ItemHome'
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import '../styles/ItemListHome.css'

export const ItemListHome = ({productos}) => {
    
    
    
    return(
        <div  className='FlexItemListHome'>
            {
            // <ItemHome itemProducts={productos} />
            productos.map((prod,i) => <ItemHome key={i} itemProducts={prod} />)

            }
        </div>
    )
}
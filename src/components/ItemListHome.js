import React from 'react';
// import ProteinStar from '../assets/img/Protein-Star.webp';
import {ItemHome} from '../components/ItemHome'


export const ItemListHome = ({productos}) => {
    return(
        <div >
            <ItemHome itemHomedata={productos} />
        </div>
    )
}
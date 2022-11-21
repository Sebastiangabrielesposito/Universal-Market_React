import React, { useEffect } from 'react';
// import ProteinStar from '../assets/img/Protein-Star.webp';
import { Item } from './Item';
// import {useMyContext} from '../app/Context/CarContext';
import { useState } from 'react';
import {LoaderOne} from '../components/Loader'

export const ItemList = ({products}) => {
    
    // const [search,setSearch] = useMyContext("");
    // const myContext = useMyContext()

    // console.log(search);
    // const filterProducts = () => {
    //     const filterProducts = products.filter((prod) => prod.marca.toLowerCase().includes(search))
    // }
   

    const [isLoading,setIsLoading] = useState(true)
    
    // const loader = <h3 style={{color:'white'}}>Cargando . . .</h3>

    setTimeout(() => {
       setIsLoading(false) 
    }, 1100);

    return(
        <div className='FlexItemList' >

            {isLoading ? <LoaderOne />
                        : products.map( product => <Item  item={product} />) }
            {/* {products.map( product => <Item  item={product} />)} */}

           {/* {
        //    products ? loader : products.map( product => <Item  item={product} />)  
           } */}
           
           {/* {filterProducts.map( product => <Item item={product} />)} */}
           
        </div>
    )
}
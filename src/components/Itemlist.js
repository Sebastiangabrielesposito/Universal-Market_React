import { Item } from './Item';
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
           
        </div>
    )
}
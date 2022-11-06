// import { Button, Typography } from "@mui/material";
import "../styles/ItemListContainer.css"
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import { height } from "@mui/system";
// import products from '../assets/data.json'
import {getProducts} from '../Services/products';
import {useEffect, useState} from 'react';
import {ItemList} from '../components/Itemlist';
// import ItemCount from "./ItemCount";


 const ItemListContainer = () => {
    
    const [datos,setDatos] = useState([]);
      useEffect(() => {
        getProducts().then(data => {
            // console.log(data);
            setDatos(data);
        },)
    });
    
    return (
        <div>  
            <div style={{textAlign:'center', marginTop:0}}>
                <ItemList products={datos} />
                {/* <ItemCount /> */}
            </div>     
        </div>

    )
};


export default ItemListContainer;
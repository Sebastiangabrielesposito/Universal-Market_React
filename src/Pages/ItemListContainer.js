// import { Button, Typography } from "@mui/material";
import "../styles/ItemListContainer.css"
import {getProducts} from '../Services/products';
import {useEffect, useState} from 'react';
import {ItemList} from '../components/Itemlist';
import {useParams} from 'react-router-dom';


const ItemListContainer = () => {
    const {idCategoria} = useParams();
console.log('idCategoria: ',idCategoria);

    const [datos,setDatos] = useState([]);
      
    useEffect(() => {
        getProducts(idCategoria).then(data => {
            console.log('data',data)
            setDatos(data);
        })
    },[]);
   
    // const FiltroProteinas = () => {
    //     const FiltroProteina = datos.filter(da => da.categoria === "proteinas")
    //     setDatos(FiltroProteina)
    // };
    // const Filtrocreatinas = () => {
    //     const Filtrocreatina = datos.filter(da => da.categoria === "creatinas")
    //     setDatos(Filtrocreatina)
    // };
    // const Filtroganadoresdepeso = () => {
    //     const Filtroganadordepeso = datos.filter(da => da.categoria === "ganadoresdepeso")
    //     setDatos(Filtroganadordepeso)
    // };
    

    return (
        <div>  
            <div style={{textAlign:'center', marginTop:0}}> 
            
            {/* {FiltroProteinas ? <p onClick={FiltroProteinas} style={{color:'white',background:'black', fontSize:30}}> Proteinas</p> : !datos}

            {Filtrocreatinas ? <p onClick={Filtrocreatinas} style={{color:'white',background:'black', fontSize:30}}> Creatinas</p> : !Filtrocreatinas}

            {Filtroganadoresdepeso ? <p onClick={Filtroganadoresdepeso} style={{color:'white',background:'black', fontSize:30}}> Ganadores de peso</p> : !Filtroganadoresdepeso}
                
            <p onClick={datos} style={{color:'white',background:'black', fontSize:30}}> Todos los productos</p> */} 
                
                <ItemList products={datos} />
            </div>     
        </div>

    )
};


export default ItemListContainer;
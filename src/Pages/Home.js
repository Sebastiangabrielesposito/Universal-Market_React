import { DestacadosHome } from "../components/Destacados-Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ItemListHome} from '../components/ItemListHome'
import { useEffect, useState } from "react";
import {HomeProducts} from '../Services/products';
import {useParams, Link} from 'react-router-dom';
import {useMyContext} from '../app/Context/CarContext';
import {getProductosByCondition} from '../app/api';
import {Button} from '@mui/material';
import {LoadrerRing} from '../components/Loader';




const Home = () => {
    
    const {id} = useParams()  
    const [products, setProducts] = useState([]);
    const [Preload,setPreload] = useState(true);
    
    setTimeout(() => {
        setPreload(false)
    }, 2000);
    
    
    useEffect(() => {
        getProductosByCondition(id).then(date => {
            // console.log(products);
            setProducts(date.filter(prod => prod.$ === "$")) 
        })
    }, [id])
    
    return (
        <div style={{background:"#000"}}>
            
            <DestacadosHome />
            {Preload ? <LoadrerRing /> : <ItemListHome  productos= {products} />}
            <div style={{textAlign:'center'}}>
                <Link className='VolverProducto' to={"/Universal-Market_React/productos"}><Button className='Volver-carrito-detail' sx={{fontSize:12,fontFamily:'cursive',color:'#326499' , marginTop:6, textAlign:'center'}} variant="outlined">Ver todos los productos</Button></Link>
            </div>  
            {/* {setState(v)} */}
            {/* <div><input type="text" onChange={(e) => setState({...state,nombre: e.target.value})} /></div>
            <div><input type="text" onChange={(e) => setState({...state, edad: e.target.value})} /></div> */}

        </div>
    );
};
export default Home;
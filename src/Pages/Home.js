import { DestacadosHome } from "../components/Destacados-Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import ItemListContainer from "./ItemListContainer";
import {ItemListHome} from '../components/ItemListHome'
import { useEffect, useState } from "react";
import {HomeProducts} from '../Services/products';
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail';
import products from '../assets/data.json';


const Home = () => {
    
    const {id} = useParams()
    
    console.log("preciocondescuento", id);
    
    const [products, setProducts] = useState([]);
        
    useEffect(() => {
        HomeProducts(id).then(date => {
            console.log(products);
            setProducts(date) 
        })
    }, [id])
    
    
    //     let FiltroDestacados = () => {
    //         const FiltroDestacados = products.filter(prod => prod.preciocondescuento === preciocondescuento)
    //         setProducts(FiltroDestacados)
    //    } 
        
    return (
        <div>
            <DestacadosHome />
            <ItemListHome productos= {products} />
        </div>
    );
};
export default Home;
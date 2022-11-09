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
    const {PrecioCondescuento} = useParams
    console.log("preciocondescuento", PrecioCondescuento);
    const [products, setProducts] = useState([]);
        useEffect(() => {
            HomeProducts(PrecioCondescuento).then(date => {
                setProducts(date) 
            })
        }, [])
    //     let FiltroDestacados = () => {
    //         const FiltroDestacados = products.filter(prod => prod.preciocondescuento === preciocondescuento)
    //         setProducts(FiltroDestacados)
    //    } 
        
    return (
        <div>
            <DestacadosHome />
            <ItemListHome productos= {products} />
            
            {/* { preciocondescuento && <ItemListHome productos={preciocondescuento} />}  */}
            {/* {preciocondescuento && <ItemListHome productos={FiltroDestacados}/>} */}
            {/* <p>{FiltroDestacados}</p> */}
        </div>
    );
};
export default Home;
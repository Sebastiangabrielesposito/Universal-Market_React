import { DestacadosHome } from "../components/Destacados-Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ItemListHome} from '../components/ItemListHome'
import { useEffect, useState } from "react";
import {HomeProducts} from '../Services/products';
import { useParams } from "react-router-dom";
import {useMyContext} from '../app/Context/CarContext';




const Home = () => {
    
    const {id} = useParams()
    // const v = useMyContext()
    // console.log(useMyContext);
    
    const [products, setProducts] = useState([]);
   
    
     useEffect(() => {
        HomeProducts(id).then(date => {
            // console.log(products);
            setProducts(date) 
        })
    }, [id])
    
    return (
        <div>
            {/* {v} */}
            <DestacadosHome />
            <ItemListHome  productos= {products} />
           
            {/* {setState(v)} */}
            {/* <div><input type="text" onChange={(e) => setState({...state,nombre: e.target.value})} /></div>
            <div><input type="text" onChange={(e) => setState({...state, edad: e.target.value})} /></div> */}

        </div>
    );
};
export default Home;
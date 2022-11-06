import { DestacadosHome } from "../components/Destacados-Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import ItemListContainer from "./ItemListContainer";
import {ItemListHome} from '../components/ItemListHome'
import { useEffect, useState } from "react";
import {HomeProducts} from '../Services/products';


const Home = () => {

    const [homedata, setHomedata] = useState([]);
        useEffect(() => {
            HomeProducts().then(date => {
                // console.log(date);
                setHomedata(date) 
            },[])
        })

    
    
    return (
        <div>
            <DestacadosHome />
            <ItemListHome productos={homedata} />
        </div>
    );
};
export default Home;
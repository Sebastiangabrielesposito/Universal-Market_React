import "../styles/ItemListContainer.css"
import {getProducts} from '../Services/products';
import {useEffect, useState} from 'react';
import {ItemList} from '../components/Itemlist';
import {useParams, Link} from 'react-router-dom';
import {getProductosByCondition} from '../app/api';
import {Button} from '@mui/material';
// import {useMyContext} from '../app/Context/CarContext';


const ItemListContainer = () => {
    const {idCategoria} = useParams();
    const [datos,setDatos] = useState([]);
      
    useEffect(() => {
        getProductosByCondition(idCategoria).then(data => {
            // console.log('data',data)
            setDatos(data);
        })
    },[idCategoria]);
   
   


    return (
        <div style={{background:'#000'}}>  
            <div>
                <ItemList products={datos} /> 
                <div style={{textAlign:'center', display:'flex',justifyContent:'space-around',gap:80}}>
                    <Link className='VolverProducto' to={"/Universal-Market_React/"}><Button className='Volver-carrito-detail' sx={{fontSize:14,fontFamily:'cursive',color:'#326499' , marginTop:2, textAlign:'center',width:120,marginBottom:2}} variant="outlined">Home</Button></Link>
                
                    <Link className='VolverProducto' to={"/Universal-Market_React/car"}><Button className='Volver-carrito-detail' sx={{fontSize:14,fontFamily:'cursive',color:'#326499' , marginTop:2,marginBottom:2, textAlign:'center',width:120}} variant="outlined">Carrito</Button></Link>
                </div>  
                
                <div className="divimgProducts" >
                    <img data-aos="zoom-in" className="imgProducts" src=" https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7b4a1c116419619.60627a4c5dd9e.gif" alt="" />  
                </div>
            </div>
        </div>
    )
};


export default ItemListContainer;
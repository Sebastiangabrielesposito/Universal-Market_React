import '../styles/Item.css'
import { Link } from 'react-router-dom';
import {Button} from '@mui/material';


export const Item = ({item}) => {
    
    // console.log(item)
    return(
        
        <div data-aos="fade-up" className='FlexItem'>
            <div className='FlexItem1'>
                <Link to={"/Universal-Market_React/productos/item/" + item.id} ><img src={item.foto} alt="Foto del producto"  className='ItemImg' /></Link>
                <p  className='item'>{item.descripcion}</p>
                <p  className='item'>{item.marca}</p>
                <div className='precios'>
                    <p key={"4"} className='item-PrecioConDescuento'> {item.$}{item.preciocondescuento}</p>
                    <p className='item-Precio'>${item.precio}</p>
                </div>
                    {/* {item.preciocondescuento && <p style={{fontSize:9,textAlign:'center',color:'red'}}>producto con oferta limitada</p>} */}
                    <Link to={"/Universal-Market_React/productos/item/" + item.id} className='TerminarCompra'><Button  clas
                        sx={{"&:hover": { color: "#8cbcd8",fontSize:10.5 },height:25, fontSize:10, width:180, color:'grey', background:'#aabbd8', transition:"all 0.5s ease-in-out", fontFamily:'Trispace',textDecoration:'none', marginBottom:0.2,marginTop:0.6}}
                        variant="outlinedWarning"> Detalle del producto
                        </Button></Link>  
            </div>
        </div>
    )
}

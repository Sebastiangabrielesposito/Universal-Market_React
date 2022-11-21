// import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import '../styles/ItemHome.css'

export const ItemHome = ({itemProducts}) => {
    // console.log(itemProducts);
    return(
        <div data-aos="fade-up" className='FlexItem'>
            <div className='FlexItem1'>
                <img src={itemProducts.foto} alt="Foto del producto"  className='ItemImg' />
                <p  className='item'>{itemProducts.descripcion}</p>
                <p  className='item'>{itemProducts.marca}</p>
                <div className='precios'>
                    <p key={"4"} className='item-PrecioConDescuento'> {itemProducts.$}{itemProducts.preciocondescuento}</p>
                    <p  className='item-Precio'>${itemProducts.precio}</p>
                </div>
                    <Link to={"/Universal-Market_React/productos/item/" + itemProducts.id} className='TerminarCompra'><Button  
                        sx={{"&:hover": { color: "#8cbcd8",fontSize:10.5 },height:25, fontSize:10, width:180, color:'grey', background:'#aabbd8', transition:"all 0.5s ease-in-out", fontFamily:'Trispace',textDecoration:'none', marginBottom:0.2,marginTop:0.6}}
                        variant="outlinedWarning"> Detalle del producto
                        </Button></Link>  
            </div>
        </div>
    )

}
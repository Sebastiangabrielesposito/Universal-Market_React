// import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import '../styles/ItemHome.css'

export const ItemHome = ({itemProducts}) => {
    // console.log(itemProducts);
    return(
        <div  className='FlexItem'>
            <div className='FlexItem1'>
                <img src={itemProducts.foto} alt="Foto del producto"  className='ItemImg' />
                <p  className='item'>{itemProducts.descripcion}</p>
                <p  className='item'>{itemProducts.marca}</p>
                <div className='precios'>
                    <p key={"4"} className='item-PrecioConDescuento'> {itemProducts.$}{itemProducts.preciocondescuento}</p>
                    <p  className='item-Precio'>${itemProducts.precio}</p>
                </div>
                    {/* <ItemCount /> */}
                    {/* <p  className='ItemCount'>Stock : {itemProducts.stock} </p> */}
                    <Link to={"/Universal-Market_React/productos/" + itemProducts.preciocondescuento} className='LinkDetalle'>Detalle del producto</Link>  
            </div>
        </div>
    )

}
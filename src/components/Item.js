import '../styles/Item.css'
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    // console.log(item)
    return(
        
        <div  className='FlexItem'>
            <div className='FlexItem1'>
                <img src={item.foto} alt="Foto del producto"  className='ItemImg' />
                <p  className='item'>{item.descripcion}</p>
                <p  className='item'>{item.marca}</p>
                <div className='precios'>
                    <p key={"4"} className='item-PrecioConDescuento'> {item.$}{item.preciocondescuento}</p>
                    <p  className='item-Precio'>${item.precio}</p>
                </div>
                    <Link to={"/Universal-Market_React/productos/item/" + item.id} className='LinkDetalle'>Detalle del producto</Link>  
            </div>
        </div>
    )
}

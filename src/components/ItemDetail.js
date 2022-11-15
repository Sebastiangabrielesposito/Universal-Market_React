// import {Link} from 'react-router-dom';
import ItemCount from '../components/ItemCount'
import {useMyContext} from '../app/Context/CarContext';


const ItemDetail = ({DetailItem}) => {
    const [state,setState] = useMyContext();
    return (
        <div className='FlexItem'>
            <div className='FlexItem1'>
                <img src={DetailItem.foto} alt="Foto del producto"  className='ItemImg' />
                <p  className='item'>{DetailItem.descripcion}</p>
                <p  className='item'>{DetailItem.marca}</p>
                <div className='precios'>
                    <p key={"4"} className='item-PrecioConDescuento'> {DetailItem.$}{DetailItem.preciocondescuento}</p>
                    <p  className='item-Precio'>${DetailItem.precio}</p>
                </div>
                    <ItemCount Stock={DetailItem.stock}  onAdd={(count) => setState(count) 
                    }  />
            </div>
            
            <div className="divimgProducts"> 
                <img className="imgProducts"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/83e002116419619.6062bddbc515c.gif
                    " alt="Imagen Productos anterior a finalización de compra" />
            </div>
        </div>
        // count ? finalizar : agregar

    )
}
export default ItemDetail;
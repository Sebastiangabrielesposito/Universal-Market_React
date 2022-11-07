import {DataCreatina} from '../assets/data';
import ItemCount from '../components/ItemCount';


export const Creatinas = () => {
    return(
        <div className='FlexItem'>
                {
                DataCreatina.map((creatina, i) => (
                    <div className='FlexItem1'>
                        <img src={creatina.foto} className='ItemImg' alt="" />
                        <p key={"2"} className='item'>{creatina.marca}</p>
                        <p key={"3"} className='item'>{creatina.descripcion}</p>
                        <div className='precios'>
                        <p key={"4"} className='item-PrecioConDescuento'> {creatina.$}{creatina.preciocondescuento}</p>
                        <p key={"5"} className='item-Precio'>${creatina.precio}</p>
                        </div>
                        <p key={"6"} className='item-Precio'>⭐⭐⭐⭐⭐</p>


                        <ItemCount />
                        <p  className='ItemCount'>Stock : {creatina.stock} </p>
                    </div>
                    ))
                }
        </div>
    );
};
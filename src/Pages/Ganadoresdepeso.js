import {DataGanadordePeso} from '../assets/data';
import ItemCount from '../components/ItemCount';


export const Ganadoresdepeso = () => {
    return(
        <div className='FlexItem'>
                {
                DataGanadordePeso.map((mass, i) => (
                    <div className='FlexItem1'>
                        <img src={mass.foto} className='ItemImg' alt="" />
                        <p key={"2"} className='item'>{mass.marca}</p>
                        <p key={"3"} className='item'>{mass.descripcion}</p>
                        <div className='precios'>
                        <p key={"4"} className='item-PrecioConDescuento'> {mass.$}{mass.preciocondescuento}</p>
                        <p key={"5"} className='item-Precio'>${mass.precio}</p>
                        </div>
                        <p key={"6"} className='item-Precio'>⭐⭐⭐⭐⭐</p>


                        <ItemCount />
                        <p  className='ItemCount'>Stock : {mass.stock} </p>
                    </div>
                    ))
                }
        </div>
    );
};
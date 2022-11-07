import {DataProteina} from '../assets/data';
import ItemCount from '../components/ItemCount';



export const Proteinas = () => {
    // console.log(DataProteina);
    return(
        <div className='FlexItem'>
                {
                DataProteina.map((protein, i) => (
                    <div className='FlexItem1'>
                        <img src={protein.foto} className='ItemImg' alt="" />
                        <p key={"2"} className='item'>{protein.marca}</p>
                        <p key={"3"} className='item'>{protein.descripcion}</p>
                        <div className='precios'>
                        <p key={"4"} className='item-PrecioConDescuento'> {protein.$}{protein.preciocondescuento}</p>
                        <p key={"5"} className='item-Precio'>${protein.precio}</p>
                        </div>
                        <p key={"6"} className='item-Precio'>⭐⭐⭐⭐⭐</p>


                        <ItemCount />
                        <p  className='ItemCount'>Stock : {protein.stock} </p>
                    </div>
                    ))
                }
        </div>
    );
};
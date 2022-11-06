import ItemCount from "./ItemCount"
import '../styles/ItemHome.css'

export const ItemHome = ({itemHomedata}) => {
    return(
        <div>
            {/* <p className="OfertasInbatibles">Ofertas inbatibles</p>  */}
            <div className="FlexItemHome">
                {itemHomedata.map((it, i) => (   
                    <div className="FlexItem1">
                        <img src={it.foto} className='ItemImage' alt="" />
                        <p key={"2"} className='items'>{it.marca}</p>
                        <p key={"3"} className='items'>{it.descripcion}</p>
                        <div className='precios'>
                            <p key={"4"} className='item-PrecioConDescuento'> {it.$}{it.preciocondescuento}</p>
                            <p key={"5"} className='item-Precio'>${it.precio}</p>
                        </div>
                        <p key={"6"} className='item-Precio'>⭐⭐⭐⭐⭐</p>


                        <ItemCount />
                    <p  className='ItemCount'>Stock : {it.stock} </p>
                    </div>
                    )
                )}
                
            </div>
        </div>            
    )

}
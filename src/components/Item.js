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
                    {/* <ItemCount /> */}
                    {/* <p  className='ItemCount'>Stock : {item.stock} </p> */}
                    <Link to={"/Universal-Market_React/productos/item/" + item.id} className='LinkDetalle'>Detalle del producto</Link>  
            </div>
        </div>
    )
}





// {/* 
//             {item.map((it, i) => (
//                 <div className='FlexItem1'>
//                     <img src={it.foto} className='ItemImg' alt="" />
//                     <p key={"2"} className='item'>{it.marca}</p>
//                     <p key={"3"} className='item'>{it.descripcion}</p>
//                     <div className='precios'>

//                     <p key={"4"} className='item-PrecioConDescuento'> {it.$}{it.preciocondescuento}</p>
//                     <p key={"5"} className='item-Precio'>${it.precio}</p>
//                     </div>
//                     <p key={"6"} className='item-Precio'>⭐⭐⭐⭐⭐</p> */}


//                     {/* <ItemCount /> */}
//                    {/* <p  className='ItemCount'>Stock : {it.stock} </p> */}
//                 {/* </div> */}
           
             
           
// {/*            
//            {item.map(it => (
//                <div>
//                    <img src={it.foto} alt=""  className='ItemImg' />
//                    <p  className='item'>{it.descripcion}</p>
//                    <p  className='item'>{it.marca}</p>
//                    <p  className='item-Precio'>${it.precio}</p>
//                    <ItemCount />
//                    <p  className='ItemCount'>Stock : {it.stock} </p>
                    
//                </div>
//            ))} */}

   
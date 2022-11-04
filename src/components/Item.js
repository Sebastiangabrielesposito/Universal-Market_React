// import ProteinStar from '../assets/img/Protein-Star.webp';
import '../styles/Item.css'
// import products from '../assets/data.json'
import ItemCount from "./ItemCount";
// import fotos from '../assets/data'


export const Item = ({item}) => {
    
    return(
        <div  className='FlexItem'>
            {item.map((it, i) => (
                <div className='FlexItem1'>
                    <img src={it.foto} className='ItemImg' alt="" />
                    <p key={"3"} className='item'>{it.marca}</p>
                    <p key={"2"} className='item'>{it.descripcion}</p>
                    <p key={"4"} className='item-Precio'>${it.precio}</p>
                    <p key={"5"} className='item-Precio'>⭐⭐⭐⭐⭐</p>


                    <ItemCount />
                   <p  className='ItemCount'>Stock : {it.stock} </p>
                </div>
            ))}
             
           
{/*            
           {item.map(it => (
               <div>
                   <img src={it.foto} alt=""  className='ItemImg' />
                   <p  className='item'>{it.descripcion}</p>
                   <p  className='item'>{it.marca}</p>
                   <p  className='item-Precio'>${it.precio}</p>
                   <ItemCount />
                   <p  className='ItemCount'>Stock : {it.stock} </p>
                    
               </div>
           ))} */}

        </div>
    )
}
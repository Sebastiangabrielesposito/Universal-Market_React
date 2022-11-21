import {useState, useContext} from 'react';
import ItemCount from '../components/ItemCount'
import {Link} from 'react-router-dom';
import { useMyContext } from '../app/Context/CarContext';
import CarContext from '../app/Context/CarContext';
import {Loader} from './Loader';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'


const ItemDetail = ({DetailItem}) => {
    // const {addToCar} = useContext(AppContext);
    const {addToCar} = useMyContext();
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [isLoading,setIsLoading] = useState(true)

    const Toast1 = (count) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-left',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            // background:'linear-gradient(#6B11B4,#326499)',
            background:'#151515',
            color:'lightblue',
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `Agregaste ${count}u al carrito`
          })
    }
    
    
    // const loader =  <h3 style={{color:'white'}}>Cargando . . .</h3>
    setTimeout(() => {
       setIsLoading(false) 
    }, 1500);
    
    return (
         
        <div  className='FlexItem'>
            { isLoading ? <Loader /> :
                <div data-aos="zoom-in" className='FlexItem1'>
                    <img src={DetailItem.foto} alt="Foto del producto"  className='ItemImg' />
                    <p  className='item'>{DetailItem.descripcion}</p>
                    <p  className='item'>{DetailItem.marca}</p>
                    <div className='precios'>
                        <p key={"4"} className='item-PrecioConDescuento'> {DetailItem.$}{DetailItem.preciocondescuento}</p>
                        <p  className='item-Precio'>${DetailItem.precio}</p>
                </div>
                  {
                      selectedQuantity !== 0 ?
                       <Link className='TerminarCompra' to="/Universal-Market_React/car"><Button  clas
                        sx={{"&:hover": { color: "#8cbcd8",fontSize:11.5 },height:25, fontSize:11, width:160, color:'grey', background:'#aabbd8', transition:"all 0.5s ease-in-out", fontFamily:'Trispace',textDecoration:'none', marginBottom:0.2,marginTop:0.6}}
                        variant="outlinedWarning"> 
                        Ir al carrito</Button></Link> 
                        :  <ItemCount Stock={DetailItem.stock} onAdd={(count) =>{
                            Toast1(count)
                            addToCar(DetailItem,count);
                            setSelectedQuantity(count)  
                        }  
                          }  />
                  } 
            </div>}
            
            <div data-aos="zoom-in" className="divimgProducts"> 
                <img className="imgProducts"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/83e002116419619.6062bddbc515c.gif
                    " alt="Imagen Productos anterior a finalización de compra" />
            </div>
        </div>
    )
}

export default ItemDetail;
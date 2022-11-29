// import{CarContext} from '../app/Context/CarContext'
import { useMyContext } from '../app/Context/CarContext';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
import {LoaderCar} from '../components/Loader';
import '../styles/CartView.css'
import Swal from 'sweetalert2'
import {Formulario} from '../components/Formulario';

export const Car = () => {
    const {car,removeItem,clear,priceInCar,TerminarCompra } = useMyContext()
    // console.log(priceInCar);
   
    const AlertRemove = (cantidadDescripcion) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-left',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            width:400,
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
            title: `Eliinaste ${cantidadDescripcion} del carrito`
            })
    };
    
    
   
   



    return(
        <div style={{background:'black',textAlign:'center'}}>
                  {car.length  > 0  && <div><h2 className='carro Car' style={{marginBottom:50,fontSize:35}} >Carrito </h2></div>}
                
            
            <div className='FlexItem'>
                {  
                    car.map((item) => (
                        <div className='FlexItem1'>
                        <img src={item.foto} alt="Foto del producto"  className='ItemImg' />
                        <p  className='item'>{item.descripcion}</p>
                        <p  className='item'>{item.marca}</p>
                        <div className='precios'>
                            <p key={"4"}className='item-PrecioConDescuento'> {item.$}{item.preciocondescuento}</p>
                            {item.preciocondescuento ?    <p className='item-Precio'> ${item.precio}</p> : <p className='item-Precio'> ${item.precio} </p>}
                        </div>
                        <p className='itemCant'>Cantidad:{item.count}</p>
                        <Button variant="outlined" color="error" style={{background:'black' ,fontSize:11,marginTop:12}} onClick={ () => { 
                            AlertRemove(`${item.count}u de ${item.marca} ${item.descripcion}`) 
                            removeItem(item.id)}}>Eliminar</Button>
                        
                        </div>))                
                }
            </div>  
                    
            {car.length === 0 ?  <div style={{textAlign:'center',marginBottom:80 ,align:'center'}}>
                <div>
                    <h2 className='carro Car' style={{marginBottom:50}}>Carrito vacío</h2>
                </div>
                <LoaderCar />
            
            
            </div> : 
            
            <div style={{textAlign:'center',heigth:10,fontSize:20,background:'black'}}>
            <Button variant="outlined" color="error" style={{background:'black' ,fontSize:13,width:170}} onClick={ () =>clear()}>Eliminar todo</Button></div>}      
            

            {car.length >  0 && <Formulario addOrder={ data => TerminarCompra(data)} /> }
                
            
            <div className='Volver-carrito' >
                <Link className='VolverProducto' to={"/Universal-Market_React/productos"}><Button className='Volver-carrito-detail' sx={{fontSize:12,fontFamily:'cursive',color:'#326499'}} variant="outlined">Volver a productos</Button></Link>
                
                
                <p  style={{color:'#326499',fontSize:20}}>Total carrito 🛒: ${priceInCar()} </p>
                
            </div>
            
            
            
            <div data-aos="zoom-in" className="divimgProducts"> 
                <img className="imgProducts"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/444a24116419619.6062bddbc4d2e.gif
                " 
                alt="Imagen Productos anterior a finalización de compra" />
            </div>
        </div>
    );
};
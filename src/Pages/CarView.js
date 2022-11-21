import{CarContext} from '../app/Context/CarContext'
import { useMyContext } from '../app/Context/CarContext';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { fontSize, textAlign } from '@mui/system';
// import {Loader} from '../components/Loader';
// import { Loader } from '../components/Loader';
import { Metronome } from '@uiball/loaders'
import '../styles/CartView.css'

export const CarView = () => {
    const {car,removeItem,clear,priceInCar,itemsInCar} = useMyContext()
    console.log(priceInCar);
   
    
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
                            {/* <p>Antes</p> */}
                            <p key={"4"}className='item-PrecioConDescuento'> {item.$}{item.preciocondescuento}</p>
                        </div>
                        {item.preciocondescuento ?    <p className='item-Precio'> Sale ${item.precio}</p> : <p className='item-Precio'> ${item.precio} </p>}
                        <p className='item'>Cantidad:{item.count}</p>
                        <Button variant="outlined" color="error" style={{background:'black' ,fontSize:11,marginTop:12}} onClick={ () => removeItem(item.id)}>Eliminar</Button>
                        
                    </div>))      
                    
                    
                }
            </div>  
                    
            {car.length === 0 ?  <div style={{textAlign:'center',marginBottom:80 ,align:'center'}}>
                <div>
                    <h2 className='carro Car' style={{marginBottom:50}}>Carrito vacío</h2>
                </div>
                <div className='DivMetronome' style={{textAlign:'right'}}>
                    <Metronome 
                    size={40}
                    speed={1.6} 
                    color="white" 
                    />
                </div>
            
            
            </div> : 
            
            <div style={{textAlign:'center',heigth:10,fontSize:20,background:'black'}}>
            <Button variant="outlined" color="error" style={{background:'black' ,fontSize:11}} onClick={ () =>clear()}>Eliminar todo</Button></div>}      
            
            
            {car.length >  0 && <div style={{color:'#326499',marginTop:50,fontSize:20}}>
                <p>Total carrito 🛒: ${priceInCar()} </p>
            </div>}
            
            
            <div data-aos="zoom-in" className="divimgProducts"> 
                <img className="imgProducts"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/444a24116419619.6062bddbc4d2e.gif
                " 
                alt="Imagen Productos anterior a finalización de compra" />
            </div>
        </div>
    );
};
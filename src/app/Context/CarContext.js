import { BabyChangingStation } from '@mui/icons-material';
import {createContext, useContext, useState} from 'react';
import Swal from 'sweetalert2'
import {createPedido} from '../api';


export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const CarContext = ({children}) => {

    const [car, setCar] = useState([]);
    // console.log(car);
    
    const addToCar = (DetailItem,count) => {
        // console.log(DetailItem,count);
        // let newCar = car.map(item => item);
        // newCar.push(DetailItem, count)
        let itemAlreadyInCar = car.findIndex(itemInCar => itemInCar.id === DetailItem.id)
        let newCar = [...car];
        
        if(itemAlreadyInCar !== -1){
            newCar[itemAlreadyInCar].count += count
            setCar(newCar)
            
        }
        else {
            DetailItem.count = count;
            newCar.push(DetailItem)
            setCar(newCar)
        }
    }

    const itemsInCar = () => {
        let total = 0;
        car.forEach(itemsInCar => total = total + itemsInCar.count);
        return total;
    }
    
    const clear = (idRemove) => {
        const newCar = [...car];
        newCar.splice(0)
        Toast2();
        setCar(newCar); 
    }


    const Toast2 = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
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
            title: `Eliminaste todos los productos del carrito`
          })
    }

    const removeItem = (idRemove) => {
        console.log("Eliminando el item:", idRemove);
        const newCar = [...car];
        const newTwoCar = newCar.filter(item => item.id !== idRemove);
        
        setCar(newTwoCar);
    }

    const priceInCar = () => {
        let total = 0 ;
        car.forEach(priceInCar => total = total + priceInCar.precio * priceInCar.count);
        return total;
    }

    const TerminarCompra = () => {
        // car.map ((producto) => {
            // const productos = car //{};
            const cliente = {nombre: "Ali Baba", telefono:"1122113311", email:"Alibaba@aladino.com"}
            // const pedido = {pedido: car.map((producto) => 
            //     nombre: producto.marca, descripcion: producto.descripcion, precio: producto.precio * producto.cantidad, cantidad: producto.cantidad),cliente}
            const pedido = {pedido: car,cliente}

            createPedido((pedido));
        
        //alerta
        setCar([])
    }

    return( 
        <AppContext.Provider value = {{car,addToCar,clear,itemsInCar,removeItem,priceInCar,TerminarCompra}}>
            {children}
        </AppContext.Provider>
    );
};

export default CarContext;



import {createContext, useContext, useState} from 'react';
import Swal from 'sweetalert2'
import {createPedido} from '../api';


export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const CarContext = ({children}) => {

    const [car, setCar] = useState([]);
    // console.log(car);
    
    const addToCar = (DetailItem,count) => {
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
            width: 550,
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


     
    const AlertCompra = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Gracias por tu compra 👍',
            showConfirmButton: false,
            timer: 2500,
            background:'#080808',
            color:'#326499'
          })
    }

    const RellenarCampos = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            background:'#151515',
            color:'lightblue',
            width: 530,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: `Debes rellenar correctamente los campos`
          })
    }

    const TerminarCompra = (data) => {
            const pedidoFinal = car.map((producto) => ({nombre: producto.marca, descripcion: producto.descripcion, precio: producto.precio * producto.count , cantidad: producto.count}));
            let cliente = data;
            let hoy = new Date();
            let fecha = hoy.toLocaleString();
            console.log(pedidoFinal);
            if(cliente.nombre === "" || cliente.email === "" || cliente.telefono === ""){
                RellenarCampos()
            }
            else {
                const idPedido =  createPedido({pedidoFinal, cliente,  fecha});
                AlertCompra()
                setCar([])
            }
            
    }
   

    return( 
        <AppContext.Provider value = {{car,addToCar,clear,itemsInCar,removeItem,priceInCar,TerminarCompra}}>
            {children}
        </AppContext.Provider>
    );
};

export default CarContext;



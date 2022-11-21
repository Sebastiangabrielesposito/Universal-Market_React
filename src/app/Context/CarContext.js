import {createContext, useContext, useState} from 'react';

export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const CarContext = ({children}) => {
    
    // const [state,setState] = useState();
    // const [search,setSearch] = useState("")
    const [car, setCar] = useState([]);
    console.log(car);
    
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
        setCar(newCar); 
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

    return( 
        <AppContext.Provider value = {{car,addToCar,clear,itemsInCar,removeItem,priceInCar}}>
            {children}
        </AppContext.Provider>
    );
};

export default CarContext;



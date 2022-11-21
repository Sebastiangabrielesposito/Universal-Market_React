import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import '../styles/CarWidgets.css'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {Link} from 'react-router-dom';
import { useMyContext } from '../app/Context/CarContext';
import CarContext from '../app/Context/CarContext';
// import {AppContext} from '../app/Context/CarContext'


const CarWidgets = () => {
    // const useMyContext = useContext(AppContext);
    const myContext = useMyContext()
    
    
    return(
        <div> 
            <Button component={Link} to="/Universal-Market_React/car" >
                <IconButton  sx={{color:'#fff'}} >
                {/* //   href="https://google.com"> */}
                    <ShoppingCartTwoToneIcon 
                     className='carro Car'/>
                </IconButton>
            </Button>
            {myContext.itemsInCar() >= 1 && <span style={{color:'white '}}>{myContext.itemsInCar()}</span>}
        </div>
    )   
} 
export default CarWidgets;
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import '../styles/CarWidgets.css'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {Link} from 'react-router-dom';

const CarWidgets = () => {
    return(
        <div> 
            <Button component={Link} to="/Universal-Market_React/car" >
                <IconButton  sx={{color:'#fff'}} >
                {/* //   href="https://google.com"> */}
                    <ShoppingCartTwoToneIcon 
                     className='carro Car'/>
                </IconButton>
            </Button>
        </div>
    )   
} 
export default CarWidgets;
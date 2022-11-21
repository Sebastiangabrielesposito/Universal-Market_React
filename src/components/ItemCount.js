import '../styles/ItemCounts.css'
import Button from '@mui/material/Button';
import {useState} from 'react';
import {Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const ItemCount = ({Stock,onAdd}) => {
    
    const [counter,setCounter] = useState(0);
    
    const AddCounter = () =>{
        setCounter(counter + 1); 
    }
    
    const RemoveCounter = () => {
        setCounter(counter - 1) 
    }
    
    
    return(
        <div>
            <div className='FlexInputCount'>
                <Typography align='center' sx={{marginTop:1,display:'flex',gap:1.1,textAlign:'center'}}  >
                    <Button  
                        disabled={ counter <= 0 } 
                        variant="contained" 
                        startIcon={<RemoveIcon className='RemmoveIcon' onClick={() => {
                            RemoveCounter();
                            }}/>}
                        sx={{
                        marginTop:0.5,
                        gap:5,
                        width:10,
                        height:20,
                        color: "#c8cfdb",
                        background:"rgba(0, 0, 0, 0.4)",
                        "&:hover": { background: "rgba(99, 99, 104, 0.9)", color:"#aabbd8" },
                        transition:"all 0.5s ease-in-out"
                        }} >
                                        
                    </Button>
                        
                        <p className='InputCounter'>{counter}</p>
                    
                    <Button disabled={counter >= Stock } 
                    variant="contained" 
                    endIcon= {<AddIcon className='AddIcon'  onClick={() => {
                        AddCounter() ;
                    }} />}
                    sx={{
                        marginTop:0.5,
                        textAlign:'center',
                        gap:5,
                        width:10,
                        height:20,
                        color: "#c8cfdb",
                        background:"rgba(0, 0, 0, 0.4)",
                        "&:hover": { background: "rgba(99, 99, 104, 0.9)", color:"#aabbd8" },
                        transition:"all 0.5s ease-in-out"
                        }} >                       
                    </Button>            
                </Typography>
            </div>
            
                
            <div  >
                <Typography align='center' sx={{marginTop:1}} >
                    <Button  
                    onClick={() => onAdd(counter) } 
                    sx={{"&:hover": { color: "#8cbcd8" },height:25, fontSize:10.5, width:160, color:'grey', background:'#aabbd8', transition:"all 0.5s ease-in-out", fontFamily:'Trispace',marginBottom:0.2}}
                    variant="outlinedWarning">                        
                    Agregar al carrito</Button>
                </Typography>             
            
                <p   className='ItemCount' > Stock :{Stock-counter}</p>
            </div>             
        </div>
        )
};

export default ItemCount;

// counterInput= {products.map((prod,i) => prod.stock)}
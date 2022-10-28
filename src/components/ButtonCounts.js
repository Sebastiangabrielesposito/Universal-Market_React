import { Button, Typography } from "@mui/material";
import "../styles/ItemListContainer.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/ItemCounts.css'
import { useState } from "react";


export const ButtonCounts = ({ButtonCount}) => {
    const MiStock = 10;
    const [counter,setCounter] = useState(0);

    const AddCounter = () =>{
        setCounter(counter + 1); 
        counter >= MiStock &&  setCounter(counter === false )
    }

    const RemoveCounter = () => {
        setCounter(counter - 1)
        counter <= 0 &&  setCounter(counter === false)
        
    }

    


    return (
            <div >
                <Typography align='center' sx={{marginTop:15}}  >
                    <Button 
                        variant="contained"
                        IconButton 
                        startIcon={<RemoveIcon  onClick={() => {
                            RemoveCounter();
                            // mistock()
                          }}/>}
                        endIcon= {<AddIcon  onClick={() => {
                            AddCounter() ;
                            // mistock()

                          }} />}
                        sx={{
                            gap:5,
                            width:180,
                            height:23,
                            color: "#c8cfdb",
                            background:"rgba(0, 0, 0, 0.4)",
                            "&:hover": { background: "rgba(99, 99, 104, 0.9)", color:"#aabbd8" },
                            transition:"all 0.5s ease-in-out"
                          }} >
                            {counter}               
                    </Button>
                </Typography>
              
        
                <Typography align='center' sx={{marginTop:1}} >
                    <Button 
                        sx={{"&:hover": { color: "#8cbcd8" },height:25, fontSize:10.5, width:180, color:'grey', background:'#aabbd8', transition:"all 0.5s ease-in-out", fontFamily:'Trispace'}}
                        variant="outlinedWarning">
                        {/* 'Inspiration', cursive ,'Trispace'    */}
                        
                        Agregar al carrito</Button>
                </Typography>             
                          
                <p className="ItemCount" >Stock :  {MiStock - counter}</p>  
               
                
            </div>              
        
        )
};
              




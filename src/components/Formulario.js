import { useState } from "react";
import {Button} from '@mui/material';
// import {useMyContext} from '../app/Context/CarContext';
import '../styles/Formulario.css'


export const Formulario = ({addOrder}) => {
    // const {TerminarCompra } = useMyContext()
    const [nombre,setNombre] = useState("");
    const [telefono,setTelefono] = useState();
    const [email,setEmail] = useState();

    const CreateCliente = () =>{
        const cliente = {nombre,telefono,email};
        addOrder(cliente);
    }

    return(
        <div className="BoxDiv">
            <h3 className="h3Form">Completa tus datos</h3>
        <   div className="DivForm">
                <form className="FormTerminarCompra" required>
                    <input className="inputs" type="text" placeholder="Nombre y Apellido" onChange={e => setNombre(e.target.value)} required />
                    <input className="inputs"  type="number"  placeholder="Teléfono" onChange={e => setTelefono(e.target.value)} required/>
                    <input className="inputs"  type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                    <div>
                        <Button type="button" className="TerimnarCompra" variant="outlined" sx={{"&:hover": { color: "#8cbcd8",fontSize:13 },height:28, fontSize:12.5, width:180, color:'grey', transition:"all 0.5s ease-in-out", fontFamily:'Trispace',textDecoration:'none', marginBottom:0.2,marginTop:5.6}} onClick=
                        {CreateCliente}
                        > Terminar compra</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

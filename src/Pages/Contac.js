import '../styles/Contacto.css'
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const Contacto = () => {
    return (
        <div className="divimgProducts">
            <img className="imgProducts" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b6ebf6116419619.606295b6db6f5.gif" alt="" />
            {/* <hr className="hrContacto"></hr> */}
            <p style={{color:'lightblue',marginTop:30,fontSize:20}}> UniversalMarket@suplementosdeportivos.com</p>
            <p style={{color:'lightblue',marginTop:30,fontSize:17}}>Dirección: AV.Libertador 2022 C.A.B.A</p>
            <p className='ContactoEsperamos' style={{color:'lightblue',marginTop:30,fontSize:24}}>¡LOS ESPERAMOS!</p>
            <p style={{color:'lightblue', marginTop:25}}z><EmojiEmotionsIcon /></p>
        </div>
    );
};
export default Contacto;
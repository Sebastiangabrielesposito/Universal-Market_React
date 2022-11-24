import { Link } from 'react-router-dom';
import '../styles/Footer.css'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
    return(
        <div className="Footer" >
            <hr className='hrFooterInicio' />
            <div className="container-footer">
                <div className="box-footer">
                    <div className="footer-logo">
                    <Link className="titleNav" to="/Universal-Market_React">
                        <FitnessCenterIcon style={{fontSize:18}}/>UNIVERSAL-MARKE<SportsGymnasticsIcon style={{fontSize:25}}/>
                    </Link>
                    </div>
                    <div className="terminos">
                        <p><b>Aviso legal:</b>  “EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA”.“ESTE PRODUCTO NO ES UN MEDICAMENTO”</p>
                    </div>
                </div>

                <div className="box-footer">
                    <h2>E-commerce</h2>
                    <Link to="/Universal-Market_React"><p style={{padding:2}}>Inicio</p></Link>
                    <Link to="/Universal-Market_React/productos"><p style={{padding:2}}>Productos</p></Link>
                    <Link to="/Universal-Market_React/contacto"><p style={{padding:2}}>Contacto</p></Link>
                    <Link to="/Universal-Market_React/car"><p style={{padding:2}}>Carrito</p ></Link>
                </div>

                <div className="box-footer">	
                    <h2>Redes sociales</h2>
                    
                    <div className='box-footer-icons'>        
                        <div className='box-footer-item'>
                            <FacebookIcon className='box-footer-icons'style={{fontSize:22,padding:3}}/>
                            <a href='https://www.facebook.com'><p>Facebook</p></a>
                        </div>
                        
                        <div className='box-footer-item'>
                            <TwitterIcon className='box-footer-icons' style={{fontSize:22,padding:3}}/>
                            <a href='https://twitter.com'><p>Twitter</p></a>
                        </div>

                        <div className='box-footer-item'>
                            <LinkedInIcon className='box-footer-icons'style={{fontSize:22,padding:3}}/>
                            <a href='https://www.linkedin.com'><p>linkedin</p></a>
                        </div>
                        
                        <div className='box-footer-item'>
                            <InstagramIcon className='box-footer-icons'style={{fontSize:22,padding:3}}/>
                            <a href='https://www.instagram.com'><p>Instagram</p></a>
                        </div>
                    </div>
                </div>
                
            </div>        
            <div className="box-copyright">
                    <hr />
                    <p>Todos los derechos reservados © 2022 <Link className="titleNav" to="/Universal-Market_React">
                        <FitnessCenterIcon style={{fontSize:15}}/><b>UNIVERSAL-MARKE</b><SportsGymnasticsIcon style={{fontSize:20}}/>
                    </Link></p>             
            </div>
        </div>
    );
};
export default Footer;

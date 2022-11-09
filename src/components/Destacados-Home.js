import '../styles/DestacadosHome.css'
// import {BiBomb} from "react-icons/bi"
import SimpleSlider  from './HomeCarrousel'
// import dataHome from '../assets/data-Home';

export const DestacadosHome = () => {
    // console.log(dataHome);
    return(
        <div >
            <div>
                <SimpleSlider />
            </div>
            <div className='TitleFeatured'>
                {/* <BiBomb  className='Bibomb' style={{color:'white'}}/> */}
                <p className="TitlePremium">Destacados Premium</p>
            </div>
        </div>

    );
};


import '../styles/DestacadosHome.css'
import SimpleSlider  from './HomeCarrousel'


export const DestacadosHome = () => {
    // console.log(dataHome);
    return(
        <div >
            <div>
                <SimpleSlider />
            </div>
            <div className='TitleFeatured'>
                <p  className="TitlePremium">Destacados Premium</p>
            </div>
        </div>

    );
};


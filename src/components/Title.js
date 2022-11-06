import '../styles/Title.css'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
const Title = ({Greeting}) => {
    return (
        
        <div style={{height:270,background:'black'}}>
            <div className="title">
            <FitnessCenterIcon style={{fontSize:31}}/>{Greeting}<SportsGymnasticsIcon style={{fontSize:35}}/>
                <p style={{fontSize:20,marginTop:6}}>Suplementos deportivos </p>
            
            </div>
        </div>
        
    )
}

export default Title;
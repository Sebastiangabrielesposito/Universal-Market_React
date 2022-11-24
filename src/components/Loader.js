import {DotPulse, DotSpinner, Metronome} from '@uiball/loaders';
import { Ring } from '@uiball/loaders'


export const Loader = () => {
    return(
        <div>
            <DotPulse 
            size={50}
            speed={1.3} 
            color="white" 
            />
        </div>
    );
};

export const LoaderOne = () => {
    return(
        <div>
            <DotSpinner 
            size={50}
            speed={1} 
            color="white" 
            /> 
        </div>
    )
}

export const LoaderCar = () => {
    return(
        <div className='DivMetronome' >
            <Metronome 
            size={50}
            speed={1.6} 
            color="white" 
            />
        </div>
    );
};

export const LoadrerRing = () => {
    return(
        <div style={{display:'flex', justifyContent:'center', marginTop:50}}>
            <Ring 
            size={50}
            lineWeight={5}
            speed={2} 
            color="white" 
            />

        </div>
    );
};
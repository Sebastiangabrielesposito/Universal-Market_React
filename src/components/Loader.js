import {DotPulse, DotSpinner} from '@uiball/loaders';


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
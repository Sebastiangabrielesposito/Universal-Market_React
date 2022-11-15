import {createContext, useContext, useState} from 'react';

const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const CarContext = ({children}) => {
    const [state,setState] = useState()

    return( 
        <AppContext.Provider value = {[state,setState]}>
            {children}
        </AppContext.Provider>
    );
};

export default CarContext;



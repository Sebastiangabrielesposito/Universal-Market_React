
import { createGlobalStyle } from 'styled-components';

//createglobalstyle,para hacer cambios globales en body
export const Globalstyle = createGlobalStyle`
    body{
        margin: 0;
        /* background: rgb(2, 22, 31);  */
        /* background-color:#b3b3a9 */
        /* background-image: url('../assets/universal.jpg'); */
        background-image: src=(required('../assets/universal.jpg')); 
    
    }
`



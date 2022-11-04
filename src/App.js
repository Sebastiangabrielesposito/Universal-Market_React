import "./styles/styles.css";
// import NavBar from "./components/NavBar";
// import Button from '@mui/material/Button';
// import { Globalstyle } from "./app/styles";
import {  Globalstyle } from './app/styles';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
// import  ItemCount from "./components/ItemCount"
import AutoPlay from "./components/Carrousel";



const App = () => {
  return (
    <div>
      <Globalstyle />
      <NavBar />
      <AutoPlay />
      <ItemListContainer Greeting="🛒Universal-Market🛒"/>
      {/* <ItemCount /> */}
      
      

      
    </div>
  );
};

export default App;

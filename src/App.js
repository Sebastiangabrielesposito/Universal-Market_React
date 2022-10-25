import "./styles/styles.css";
// import NavBar from "./components/NavBar";
// import Button from '@mui/material/Button';
import {  Globalstyle } from './app/styles';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
// import { Globalstyle } from "./app/styles";

const App = () => {
  return (
    <div>
      <Globalstyle />
      <NavBar />
      <ItemListContainer Greeting="🛒Universal-Market🛒" />
      
      

      
    </div>
  );
};

export default App;

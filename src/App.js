import "./styles/styles.css";
import Router from "./app/Router";
import CarContext from "../src/app/Context/CarContext";


const App = () => {
  return (
    <div>
      <CarContext>
        <Router />
      </CarContext>
      
      
      

      
    </div>
  );
};

export default App;

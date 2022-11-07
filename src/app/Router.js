import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Layout from "./Layout";
import ItemListContainer from "../Pages/ItemListContainer";
import Contacto from "../Pages/Contac";
import {Proteinas} from '../Pages/Proteinas';
import {Creatinas} from '../Pages/Creatinas';
import {Ganadoresdepeso} from '../Pages/Ganadoresdepeso'
import {Car} from '../Pages/Car'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/Universal-Market_React"  element={<Home />} />
                <Route path="/Universal-Market_React/productos" element={<ItemListContainer />} />
                <Route path="/Universal-Market_React/productos/proteinas" element={<Proteinas />} />
                <Route path="/Universal-Market_React/productos/creatinas" element={<Creatinas />} />
                <Route path="/Universal-Market_React/productos/ganadoresdepeso" element={<Ganadoresdepeso />} />
                <Route path="/Universal-Market_React/contacto" element={<Contacto />} />
                <Route path="/Universal-Market_React/car"  element={<Car />} />

            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;
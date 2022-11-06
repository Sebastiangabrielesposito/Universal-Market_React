import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Layout from "./Layout";
import ItemListContainer from "../Pages/ItemListContainer";
import Contacto from "../Pages/Contac";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/Universal-Market_React"  element={<Home />} />
                <Route path="/Universal-Market_React/productos" element={<ItemListContainer />} />
                 <Route path="/Universal-Market_React/contacto" element={<Contacto />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;
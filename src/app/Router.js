import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Layout from "./Layout";
import ItemListContainer from "../Pages/ItemListContainer";
import Contacto from "../Pages/Contac";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/productos" element={<ItemListContainer />} />
                 <Route path="contacto" element={<Contacto />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;
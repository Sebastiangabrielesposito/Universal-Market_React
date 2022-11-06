import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Globalstyle } from "./styles"
import AutoPlay from "../components/Carrousel"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Title from "../components/Title"
const Layout = () => {
    return (
        <div>
            <Globalstyle />
            <NavBar />
            <AutoPlay />
            <Title Greeting="Universal-Marke" />
            <Outlet />   
        </div>

    );
}; 
export default Layout;
import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import Homes from './pages/Homes';
// import Properties from './pages/Properties';
// import Plots from './pages/Plots';
// import AddProperty from './pages/AddProperty'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Navbar from './containers/Navbar/Navbar'
import Footer from './containers/Navbar/Footer'
import GetApp from './containers/features/GetApp';
import OurPartners from './containers/features/OurPartners'
// css
import './css/layout.css'
const Layout = () => {
    return (
        <>
            <CssBaseline />
            <div className="">
                <Navbar/>
            </div>
            <div className="content-container">
            <Outlet/>
            </div>
            {/* <div className="spacer"></div> */}
            <GetApp />
            <OurPartners />
            <div className="  ">
            <Footer/>
            </div>
        </>
  )
}

export default Layout
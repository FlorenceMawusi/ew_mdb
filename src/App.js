import React, {useEffect, useContext} from "react";
// import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Navbar from "./components/Navbar";
// import logo from "./logo.png";
import Footer from "./components/Footer";
//import AppContext from '../context/appContext'
//import { useLocation } from 'react-router'

function App() {

    // const appContext = useContext(AppContext)
    // let location = useLocation()
  
    // useEffect(() => {
    //   appContext.setActivePath(location.pathname)
    //   // eslint-disable-next-line
    // }, [location])
  
  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;

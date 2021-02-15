import React from "react";
// import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Navbar from "./components/Navbar";
// import logo from "./logo.png";
import Footer from "./components/Footer";

function App() {

  
  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;

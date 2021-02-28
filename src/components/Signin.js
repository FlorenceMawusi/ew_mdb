import React, { useState, useContext } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {LoadingContext} from './Navbar';

const Signin = ({ enter_account }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const {showLoader, hideLoader} = React.useContext(LoadingContext);

  const checkLogin = (event) => {
    if (email === "") {
      alert("Please enter an email");
      return;
    } else if (password === "") {
      alert("Please enter a password");
      return;
    }
    event.preventDefault();
    showLoader();
    axios
      .post("http://localhost:4000/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        enter_account();
        history.push("/activities");
        hideLoader();
      })
      .catch((err) => {
        hideLoader();
        console.log(err);
        alert("sorry, Login failed");
      });
  };

  return (
    <MDBContainer>
      
      <MDBRow>
        <MDBCol md="6" className="mt-5 mx-auto">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <MDBBtn color="purple" onClick={checkLogin}>
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signin;

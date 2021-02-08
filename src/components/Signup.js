import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const Signup = ({enter_account}) => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const checkSignup = (event) => {
    if (userName === "") {
      alert("Please enter a username");
      return;
    } else if (email === "") {
      alert("Please enter an email");
      return;
    } else if (password === "") {
      alert("Please enter a password");
      return;
    }
    event.preventDefault();

    console.log("username", userName);
    axios
      .post("http://localhost:4000/user/signup", {
        username: userName,
        email: email,
        password: password,
      })
      .then((res) => {
        
        window.localStorage.setItem("token", res.data.token); 
        enter_account();
        history.push("/activities");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="mt-5 mx-auto">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="What nickname would you like to use?"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <MDBInput
                label="Your email"
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
                label="Your password"
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
              <MDBBtn color="purple" type="submit" onClick={checkSignup}>
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;

import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = ({ enter_account }) => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [field, setField] = useState("");
  const [age, setAge] = useState("");
  const history = useHistory();

  const checkSignup = (event) => {
    if (userName === "") {
      alert("Please enter a username");
    } else if (email === "") {
      alert("Please enter an email");
    } else if (gender === "" || gender === "choose...") {
      alert("Please choose a gender");
    } else if (field === "" || field === "choose...") {
      alert("Please choose a field");
    } else if (age === "" || age === "choose...") {
      alert("Please choose an age");
    } else if (password === "") {
      alert("Please enter a password");
    }
    event.preventDefault();
//The  man is praying
    console.log("username", userName);
    axios
      .post("http://localhost:4000/user/signup", {
        username: userName,
        email: email,
        field: field,
        age: age,
        field: field,
        password: password,
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        enter_account();
        history.push("/test");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("gender", gender);

  return (
    <MDBContainer>
      <h2 className="mx-auto">Sign up</h2>
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
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Gender
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option selected>choose...</option>
                  <option>male</option>
                  <option>female</option>
                </select>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Field of Work
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e) => setField(e.target.value)}
                >
                  <option selected>choose...</option>
                  <option>Agriculture, Food, and Natural Resources</option>
                  <option>Architecture and Construction</option>
                  <option>
                    Arts, Audio/Video Technology, and Communications
                  </option>
                  <option>Business, Management, and Administration</option>
                  <option>Education and Training</option>
                  <option>Finance</option>
                  <option>Government and Public Administration</option>
                  <option>Health Science</option>
                  <option>Hospitality and Tourism</option>
                  <option>Human Services</option>
                  <option>Information Technology</option>
                  <option>Law, Public Safety, Corrections, and Security</option>
                  <option>Manufacturing</option>
                  <option>Marketing, Sales, and Service</option>
                  <option>
                    Science, Technology, Engineering, and Mathematics
                  </option>
                  <option>Transportation, Distribution, and Logistics</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Age Group
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e) => setAge(e.target.value)}
                >
                  <option selected>choose...</option>
                  <option>21 to 30</option>
                  <option>31 to 40</option>
                  <option>41 to 50</option>
                  <option>51 to 60</option>
                </select>
              </div>
              <br></br>
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
              <MDBBtn color="purple" type="button" onClick={checkSignup}>
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

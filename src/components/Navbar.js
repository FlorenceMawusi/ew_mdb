import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Activities from "./Activities";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import User_info from "./User_info";
import SingleActivity from "./SingleActivity";
import Timeline from "./Timeline";
import Test from "./Test";
import Results from "./Results";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  state = {
    isLoggedIn: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  enter_account = () => {
    alert("Welcome");
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div style={{ minHeight: "80vh" }}>
        <Router>
          <MDBNavbar color="purple darken-2" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">EmoWork</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                {this.state.isLoggedIn && (
                  <>
                    <MDBNavItem>
                      <MDBNavLink to="/activities">Activities</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/timeline">Timeline</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/test">Take the EI Test</MDBNavLink>
                    </MDBNavItem>
                  </>
                )}
              </MDBNavbarNav>
              <MDBNavbarNav right>
                {!this.state.isLoggedIn ? (
                  <>
                    <MDBNavItem>
                      <MDBNavLink to="/signin">Sign in</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/signup">Sign up</MDBNavLink>
                    </MDBNavItem>
                    
                  </>
                ) : null}
                {this.state.isLoggedIn && (
                    <>
                  <MDBNavItem>
                    <MDBNavLink to='/' onClick={this.logout}>Logout</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="/users">User</MDBNavLink>
                </MDBNavItem>
                </>
                )}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <Switch>
            <Route path="/signin">
              <Signin enter_account={this.enter_account} />
            </Route>
            {/* <Route path="/users">
              <User_info />
            </Route> */}
            <Route path="/signup">
              <Signup enter_account={this.enter_account} />
            </Route>
            <Route path="/timeline">
              <Timeline />
            </Route>
            <Route path="/activities">
              <Activities />
            </Route>
            <Route path="/activity/:id">
              <SingleActivity />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default NavbarPage;

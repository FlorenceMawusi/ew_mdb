import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Activities from "./Activities";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
// import User_info from "./User_info";
import SingleActivity from "./SingleActivity";
import Timeline from "./Timeline";
import Test from "./Test";
import Results from "./Results";
import Loader from "./Loader";
import Tutorial from "./Tutorial";
import axios from "axios";

export const LoadingContext = React.createContext();

class NavbarPage extends Component {
  state = {
    isOpen: false,
    isLoggedIn: false,
    loading: false,
    ref_count: 0,
    results_count: 0,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  enter_account = () => {
    alert("Welcome");
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    window.localStorage.removeItem("token");
    this.setState({ isLoggedIn: false });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ isLoggedIn: true });
    }

    if (token) {
      //no. of user_reflections
      axios
        .get("http://localhost:4000/reflections/usercount", {
          headers: {
            token: token,
          },
        })
        .then((data) => {
          this.setState({ ref_count: data.data.ref_len });
          
        })
        .catch((err) => {
          console.log("error", err);
        });
        

      //no. of test results
      axios
        .get("http://localhost:4000/results/usercount", {
          headers: {
            token: token,
          },
        })
        .then((data) => {
          this.setState({ results_count: data.data.results_len });
          
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }

  render() {
    return (
      <div style={{ minHeight: "80vh" }}>
        <LoadingContext.Provider
          value={{
            isLoading: this.state.loading,
            showLoader: () => this.setState({ loading: true }),
            hideLoader: () => this.setState({ loading: false }),
          }}
        >
          <Router>
            <MDBNavbar color="purple darken-2" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">
                  Em
                  <MDBIcon far icon="smile-wink" />
                  Work
                </strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                 
                  {this.state.isLoggedIn && (
                    <>
                      {
                        //show the activity link if test count is >0
                        
                        this.state.results_count > 0 ? (
                          <MDBNavItem>
                            <MDBNavLink to="/activities">Activities</MDBNavLink>
                          </MDBNavItem>
                        ) : null
                      }
                      <MDBNavItem active={this.state.isOnTheTImelinePage}>
                        <MDBNavLink to="/timeline">Timeline</MDBNavLink>
                      </MDBNavItem>
                      {
                        //show the test link if test result count is 0 or reflection count is 10
                        this.state.results_count === 0 || this.state.ref_count === 10 ? (
                          <MDBNavItem active={this.isOnTheTestPage}>
                            <MDBNavLink to="/test">Take the EI Test</MDBNavLink>
                          </MDBNavItem>
                        ) : null
                      }
                    </>
                  )}
                  <MDBNavItem active={this.isOnTheTestPage}>
                    <MDBNavLink to="/tutorial">How to use the app</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  {!this.state.isLoggedIn ? (
                    <>
                      <MDBNavItem active={this.isOnTheSigninPage}>
                        <MDBNavLink to="/signin">Sign in</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem active={this.isOnTheSignupPage}>
                        <MDBNavLink to="/signup">Sign up</MDBNavLink>
                      </MDBNavItem>
                    </>
                  ) : null}
                  {this.state.isLoggedIn && (
                    <>
                      <MDBNavItem>
                        <MDBNavLink to="/" onClick={this.logout}>
                          Logout
                        </MDBNavLink>
                      </MDBNavItem>
                      {/* <MDBNavItem>
                  <MDBNavLink to="/users">User</MDBNavLink>
                </MDBNavItem> */}
                    </>
                  )}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>

            <Switch>
              {this.state.loading ? <Loader /> : null}
              <Route path="/signin">
                <Signin enter_account={this.enter_account} />
              </Route>
              <Route path="/tutorial">
                <Tutorial />
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
        </LoadingContext.Provider>
      </div>
    );
  }
}

export default NavbarPage;

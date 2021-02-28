import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Results() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [resultsarray, setResultsarray] = useState([]);
  const currentResults = localStorage.getItem("results");

  useEffect(() => {
    axios
      .get("http://localhost:4000/results", {
        headers: {
          token: token,
        },
      })
      .then((data) => {
        console.log(data.data);
        setResultsarray(data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <MDBContainer>
      <h2 className="text-center mt-4">Results</h2>
 
      {resultsarray[1] === undefined ? (
        //   get the item at 2 most recent results. if the 2nd is undefined, show 'results are blah'
        <div>
          <MDBRow>
          <MDBCol md="6" className="mt-5 mx-auto">
            <MDBCard  style={{ width: "25rem", margin: '0 auto', }}>
              {currentResults <= 50 && (
                <MDBCardBody>
                  <MDBCardTitle>
                    Your results are: {currentResults}%.
                  </MDBCardTitle>
                  <MDBCardText>
                    You could use some improvement in your EI.
                  </MDBCardText>
                </MDBCardBody>
              )}

              {currentResults >= 51 && currentResults <= 70 && (
                <MDBCardBody>
                  <MDBCardTitle>
                    Your results are: {currentResults}%.
                  </MDBCardTitle>
                  <MDBCardText>It looks like you're above average</MDBCardText>
                </MDBCardBody>
              )}

              {currentResults >= 71 && currentResults <= 100 && (
                <MDBCardBody>
                  <MDBCardTitle>
                    Your results are: {currentResults}%.
                  </MDBCardTitle>
                  <MDBCardText>Wow, your EI is pretty high!</MDBCardText>
                </MDBCardBody>
              )}
            </MDBCard>
          </MDBCol>
          </MDBRow>
        </div>
      ) : (
        //   else show the difference as an increase.
        <div >
          <MDBRow>
            <MDBCol md="6" className="mt-5 mx-auto">
              <MDBCard  style={{ width: "25rem", margin: '0 auto', }}>
                <MDBCardBody><MDBCardTitle>Your results are {currentResults}%</MDBCardTitle>
                <MDBCardText>
                  Your previous results were {resultsarray[1].total}% Your EI
                  improved by {currentResults - resultsarray[1].total}%
                </MDBCardText></MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      )}

      <div className="text-center">
        <MDBBtn
        className="text-center mt-4"
          color="purple"
          onClick={() => {
            window.localStorage.removeItem("results");
            history.push("/activities");
          }}
        >
          Return
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}

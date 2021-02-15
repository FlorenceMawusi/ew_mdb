import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
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
    <div>
      
      {resultsarray[1] === undefined ? (
        //   get the item at 2 most recent results. if the 2nd is undefined, show 'results are blah'
        <div>
          {currentResults <= 50 && (
            <h4>
              Your results are: {currentResults}%. You could use some improvement in
              your EI.
            </h4>
          )}
          {currentResults >= 51 && currentResults <= 70 && (
            <h4>
              Your results are: {currentResults}%. It looks like you're above average
            </h4>
          )}

          {currentResults >= 71 && currentResults <= 100 && (
            <h4>Your results are: {currentResults}%. Wow, your EI is pretty high!</h4>
          )}
        </div>
      ) : (
        //   else show the difference as an increase.
        <div>
            <h4>Your results are {currentResults}%</h4>
            <h4>Your previous results were {resultsarray[1].total}%</h4>
            <h4>Your EI improved by {currentResults - resultsarray[1].total}%</h4>
        </div>
      )}
      
      <div>
        <MDBBtn
          color="purple"
          onClick={() => {
            window.localStorage.removeItem("results");
            history.push("/activities");
          }}
        >
          Return
        </MDBBtn>
      </div>
    </div>
  );
}

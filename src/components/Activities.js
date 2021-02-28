import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdbreact";

const CardExample = () => {
  const [activities, setActivities] = useState([]);
  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:4000/activities", {
        headers: {
          token: token,
        },
      })
      .then((data) => {
        setActivities(data.data);
        console.log("activities", data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });

    //make request to the backend
    //access all the existing reflections in the backend.
  }, []);

  return (
    <div style={{margin: "0 5em 0 5em"}}>
      <h2 className="text-center">Activities</h2>

      <MDBRow>
        {activities.map((each, index) => {
          {
            console.log("disabled:", each.disabled);
          }
          return (
            <MDBCol
              key={each._id}
              className="mt-3 mb-3 mx-auto"
              md="3"
              style={{ maxWidth: "22rem" }}
            >
              <MDBCard>
                <MDBCardImage
                  style={{ height: "12rem" }}
                  className="img-fluid"
                  src={each.picture}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle style={{ height: "3rem" }}>
                    {each.title}
                  </MDBCardTitle>
                  <MDBCardText>
                    Day {index + 1}
                    
                    {each.isComplete === "no" && " (Draft)"}
                    {each.isComplete === "blank" && " (Empty)"}
                    {each.isComplete === "yes" && " (Done!)"}
                  </MDBCardText>
                  <MDBBtn
                    disabled={each.disabled}
                    color="purple"
                    onClick={() => {
                      history.push(`/activity/${each._id}`);
                    }}
                  >
                    {each.disabled ? "Locked" : "Open"}
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default CardExample;

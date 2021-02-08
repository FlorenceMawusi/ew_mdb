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
} from "mdbreact";

const CardExample = () => {
  const [activities, setActivities] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:4000/activities", {})
      .then((data) => {
        setActivities(data.data);
        console.log("activities", activities);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  console.log("activities:", activities);

  return (
    <div className="mx-4 mt-5">
      <MDBRow>
        {activities.map((each, index) => {
          return (
            <MDBCol
              key={each._id}
              className="mt-3 mb-3"
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
                  <MDBCardText>Day {index + 1}</MDBCardText>
                  <MDBBtn
                    color="purple"
                    onClick={() => {
                      history.push(`/activity/${each._id}`);
                    }}
                  >
                    Open
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

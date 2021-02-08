import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
const CardExample = () => {
  const id = useParams().id;
  const history = useHistory();
  const [activity, setActivity] = useState([]);
  const [reflection, setReflection] = useState("");
  const [publicview, setPublicview] = useState(true);
  const [isPublished, setIspublished] = useState(true);
  const token = localStorage.getItem("token");

  const saveReflection = (event) => {
    if (reflection === "") {
      alert("Please enter a reflection");
      return;
    }
    event.preventDefault();
    axios
      .post(
        "http://localhost:4000/reflections",
        {
          content: reflection,
          activity: id,
          isPublished: isPublished,
          isPublic: publicview,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert("Reflection Saved");
        history.push("/activities");
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry, try again. Something went wrong.");
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/activities/${id}`, {})

      .then((data) => {
        setActivity(data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <MDBRow>
      <MDBCol className="mx-auto mt-3" style={{ maxWidth: "50rem" }}>
        <MDBContainer>
          <MDBCard reverse>
            <MDBCardImage
              cascade
              style={{ height: "20rem", margin: "auto" }}
              src={activity.picture}
            />
            <MDBCardBody cascade>
              <MDBCardTitle className="text-center">
                {activity.title}
              </MDBCardTitle>
              <h5 className="indigo-text">
                <strong>{activity.reflection_prompt}</strong>
              </h5>
            </MDBCardBody>
          </MDBCard>
          <MDBCard
            className="card-body"
            style={{ maxWidth: "50rem", marginTop: "1rem" }}
          >
            <MDBCardTitle className="mx-auto">Benefits</MDBCardTitle>
            <MDBCardText>{activity.benefits}</MDBCardText>
          </MDBCard>
          <MDBCard
            className="card-body"
            style={{ maxWidth: "50rem", marginTop: "1rem" }}
          >
            <MDBCardTitle className="mx-auto">Reflection</MDBCardTitle>
            <form>
              <MDBInput
                type="textarea"
                value={reflection}
                label="Type your reflection here."
                rows="2"
                icon="pencil-alt"
                onChange={(event) => {
                  setReflection(event.target.value);
                }}
              />
              <div className="custom-control custom-switch mt-5">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="radio_one"
                  onClick={(event) => {
                    setPublicview((prev) => !prev);
                  }}
                />
                {console.log(publicview)}
                <label className="custom-control-label" htmlFor="radio_one">
                  Hide from timeline
                </label>
              </div>
              <div className="custom-control custom-switch mt-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="radio_two"
                  onClick={(event) => {
                    setIspublished((prev) => !prev);
                  }}
                />
                <label className="custom-control-label" htmlFor="radio_two">
                  Save as draft
                </label>
              </div>
              <div className="mt-3">
                <MDBBtn color="purple" onClick={saveReflection}>
                  Submit
                </MDBBtn>
              </div>
            </form>
          </MDBCard>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  );
};

export default CardExample;

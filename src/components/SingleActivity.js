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

  const [isPublic, setisPublic] = useState(true);
  const [isPublished, setIspublished] = useState(true);
  const [reflectionid, setReflectionid] = useState("");
  const token = localStorage.getItem("token");

  const saveReflection = (event) => {
    if (reflection === "") {
      alert("Please enter a reflection");
      return;
    }
    event.preventDefault();
    console.log("It is published:", isPublished);
    console.log("It is public:", isPublic);
    if (reflectionid) {
      axios
        .patch(
          "http://localhost:4000/reflections/update",
          {
            content: reflection,
            _id: reflectionid,
            isPublic: isPublic,
            isPublished: isPublished,
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
    } else {
      axios
        .post(
          "http://localhost:4000/reflections",
          {
            content: reflection,
            activity: id,
            isPublished: isPublished,
            isPublic: isPublic,
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
    }
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

    axios
      .get("http://localhost:4000/reflections/user", {
        headers: {
          token: token,
        },
      })
      .then((data) => {
        if (!data.data) {
          return;
        }
        console.log(data);
        setReflection(data.data.content);
        setIspublished(data.data.isPublished);
        setisPublic(data.data.isPublic);
        setReflectionid(data.data._id);
      })
      .catch((err) => {
        console.log("error", err);
      });

    if (isPublished === false) {
      saveReflection({
        preventDefault: () => {},
      });
    }
  }, [isPublished]);
  console.log("content", reflection);

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
                    setisPublic((prev) => !prev);
                  }}
                />
                {console.log(isPublic)}
                <label className="custom-control-label" htmlFor="radio_one">
                  Make Private
                </label>
              </div>

              <div className="mt-3">
                <MDBBtn
                  color="purple"
                  onClick={() => {
                    setIspublished(false);
                  }}
                >
                  Save as Draft
                </MDBBtn>
                <MDBBtn color="purple" onClick={saveReflection}>
                  Publish
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

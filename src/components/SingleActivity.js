import React, { useState, useEffect, useContext } from "react";
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
import { LoadingContext } from "./Navbar";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
const CardExample = () => {
  const id = useParams().id;

  const history = useHistory();
  const [activity, setActivity] = useState([]);
  const [reflection, setReflection] = useState("");

  const [isPublic, setisPublic] = useState(true);
  const [isPublished, setIsPublished] = useState(true);
  const [reflectionid, setReflectionid] = useState("");
  const token = localStorage.getItem("token");

  const { showLoader, hideLoader } = React.useContext(LoadingContext);

  const saveReflection = (event) => {
    if (reflection === "") {
      alert("Please enter a reflection");
      return;
    }
    event.preventDefault();
    showLoader();
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
          hideLoader();
          alert("Reflection Saved");
          history.push("/activities");
        })
        .catch((err) => {
          hideLoader();
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
          hideLoader();
          console.log(res);
          alert("Reflection Saved");
          history.push("/activities");
        })
        .catch((err) => {
          hideLoader();
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
        params: {
          activity_id: id,
        },
      })
      .then((data) => {
        if (!data.data) {
          return;
        }
        console.log(data);
        setReflection(data.data.content);
        setisPublic(data.data.isPublic);
        setReflectionid(data.data._id);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    if (isPublished === false) {
      saveReflection({
        preventDefault: () => {},
      });
    }
  }, [isPublished]);

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
                <strong>
                  {activity.reflection_prompt?.split(`\\n`).map((each) => (
                    <>
                      {each}
                      <br />
                    </>
                  ))}
                </strong>
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
                  checked={!isPublic}
                />
                {console.log(isPublic)}
                <label className="custom-control-label" htmlFor="radio_one">
                  Make Private
                </label>
              </div>

              <div className="mt-3">
                <MDBBtn
                  color="purple"
                  type="button"
                  onClick={() => {
                    setIsPublished(false);
                  }}
                >
                  Save as Draft
                </MDBBtn>

                <MDBBtn color="purple" type="button" onClick={saveReflection}>
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

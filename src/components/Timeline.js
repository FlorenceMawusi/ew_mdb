import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCol,
  MDBCardImage,
  MDBInput,
} from "mdbreact";
import axios from "axios";

const SocialPage = () => {
  const [reflections, setReflections] = useState([]);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const token = localStorage.getItem("token");
  console.log("token", token);

  const likeReflection = () => {};

  useEffect(() => {
    axios
      .get("http://localhost:4000/reflections", {
        headers: {
          token: token,
        },
      })
      .then((data) => {
        setReflections(data.data);
        console.log("reflections", reflections);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      {/* Print the reflections given the condition that isPublic===true and isPublished===true */}
      {reflections
        .filter((each) => {
          return each.isPublished === true && each.isPublic === true;
        })
        .map((each, index) => {
          return (
            <MDBRow key={each._id}>
              <MDBCol md="6" lg="5" className="mx-auto">
                <MDBCard news className="my-5 ">
                  <MDBCardBody>
                    <div className="content">
                      <div className="right-side-meta">14 h</div>
                      <h5>{each.activity.title}</h5>
                    </div>
                  </MDBCardBody>
                  <MDBCardImage
                    style={{ maxHeight: "30rem" }}
                    top
                    src={each.activity.picture}
                    alt=""
                  />
                  <MDBCardBody>
                    <div className="social-meta">
                      <p>{each.content}</p>
                      <MDBRow>
                        <MDBCol md="9">
                          <span>
                            <MDBIcon far icon="heart" className="purple-text" />
                            {likes} likes
                          </span>
                          <p>
                            <MDBIcon icon="comments" className="purple-text" />
                            {comments} comments
                          </p>
                        </MDBCol>
                        <MDBCol md="3">
                          <span>
                            <MDBIcon
                              icon="heart"
                              size="2x"
                              className="purple-text"
                              onChange={likeReflection}
                            />
                          </span>
                        </MDBCol>
                      </MDBRow>
                    </div>

                    <hr />

                    <MDBInput icon="comment-dots" hint="Add Comment..." />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          );
        })}
    </div>
  );
};

export default SocialPage;

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
  // const [likes, setLikes] = useState(0);
  // const [isLiked, setIsLiked] = useState(false);
  // const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");
  console.log("token", token);

  // const createLike = (reflection_id) => {
  //   axios
  //     .post(
  //       "http://localhost:4000/likes",
  //       {
  //         reflection_id,
  //       },
  //       {
  //         headers: {
  //           token: token,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Sorry, something went wrong.");
  //     });
  // };

  // const deleteLike = (reflection_id) => {
  //   axios
  //     .delete(
  //       "http://localhost:4000/likes",
  //       {
  //         reflection_id,
  //       },
  //       {
  //         headers: {
  //           token,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Sorry, something went wrong.");
  //     });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:4000/reflections", {
        headers: {
          token: token,
        },
      })
      .then((data) => {
        setReflections(data.data);
        console.log("reflections", data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      <h2 className="mx-auto">Timeline</h2>
      {/* Print the reflections given the condition that isPublic===true and isPublished===true */}
      {reflections
        .filter((each) => {
          return each.isPublished === true && each.isPublic === true;
        })
        .map((each, index) => {
          console.log();
          return (
            <MDBRow key={each._id}>
              <MDBCol md="6" lg="5" className="mx-auto">
                <MDBCard news className="my-5 ">
                  <MDBCardBody>
                    <div className="content">
                      <div className="right-side-meta"> Created at: <br/>{each.datePosted}</div>
                      <br/>
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
                      {/* <MDBRow>
                        <MDBCol md="9">
                          <span>
                            <MDBIcon icon="heart" className="purple-text" />
                            {likes} likes
                          </span>
                          <p>
                            <MDBIcon icon="comments" className="purple-text" />
                            {comments} comments
                          </p>
                        </MDBCol>
                        <MDBCol md="3">
                          <span>
                            <Like
                              isLiked={isLiked}
                              setIsLiked={async () => {
                                try {
                                  if (isLiked) {
                                    await deleteLike(each._id);
                                    setIsLiked(false);
                                  } else if (!isLiked) {
                                    await createLike(each._id);
                                    setIsLiked(true);
                                  }
                                } catch (error) {
                                  alert("Sorry something went went wrong");
                                  console.log(error);
                                }
                              }}
                            />
                          </span>
                        </MDBCol>
                      </MDBRow> */}
                    </div>

                    {/* <hr />

                    <MDBInput icon="comment-dots" hint="Add Comment..." /> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          );
        })}
    </div>
  );
};



// const Like = (props) => {
//   const { isLiked = false, setIsLiked = () => {} } = props;

//   return (
//     <MDBIcon
//       far={!isLiked}
//       className="purple-text"
//       icon="heart"
//       size="2x"
//       style={{
//         padding: "10px",
//         // color: isLiked ? "purple" : "white",
//         cursor: "pointer",
//         // border: "1px solid black"
//       }}
//       onClick={setIsLiked}
//     />
//   );
// };

export default SocialPage;

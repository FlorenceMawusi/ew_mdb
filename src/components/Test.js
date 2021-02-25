import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Test() {
  const [selected, setSelected] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
  });

  const history = useHistory();

  const testResult = () => {
    let sum = 0;
    for (let key in selected) {
      if (selected[key] === "") {
        alert("You did not complete one or more questions, please recheck.");
        return;
      }
      sum += selected[key];
    }
    const results = Math.round((sum / 55) * 100);

    const token = localStorage.getItem("token");

    axios
    .post(
      "http://localhost:4000/results",
      {
        total: results,
      },
      {
        headers: {
          token: token,
        },
      }
    )
    .then((res) => {
      console.log("results:", results);
      window.localStorage.setItem("results", results);
      history.push("/results");
    })
    .catch((err) => {
      console.log(err);
      alert("Sorry, try again. Something went wrong.");
    });


    
  };

  return (
    <div>
      <MDBRow>
        <MDBCol md="8" style={{ padding: "2rem", margin: "auto" }}>
          <h1>Emotional Intelligence Test</h1>
          <form>
            <h5>
              The form below contains a series of questions to evaluate your
              emotional intelligence before and after the usage of the emotional
              intelligence applications. This is a standardised EI test. If you have any questions, you can
              contact me by sending your enquiries through the contact form on
              the footer.
              <br />
              <br />
              Please try to answer the questions below as candidly and honestly
              as possible in order for us to properly evaluate and get the most
              accurate assessment of your Emotional Intelligence Level. Thank
              you.
            </h5>
            <br />
            1. I am able to identify my triggers and I know what situations
            trigger me emotionally.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd1"
              name="q1"
              value={1}
              checked={selected.q1 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q1: 1,
                }));
              }}
            />
            <label for="sd1">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd1"
              name="q1"
              value={2}
              checked={selected.q1 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q1: 2 }));
              }}
            />
            <label for="pd1">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod1"
              name="q1"
              value={3}
              checked={selected.q1 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q1: 3,
                }));
              }}
            />
            <label for="naod1">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa1"
              name="q1"
              value={4}
              checked={selected.q1 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q1: 4,
                }));
              }}
            />
            <label for="pa1">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa1"
              name="q1"
              value={5}
              checked={selected.q1 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q1: 5,
                }));
              }}
            />
            <label for="sa1">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            2. I am able to work well under pressure(anxiety, nervousness,
            perceived chaos) to achieve a goal.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd2"
              name="q2"
              value={1}
              checked={selected.q2 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q2: 1,
                }));
              }}
            />
            <label for="sd2">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd2"
              name="q2"
              value={2}
              checked={selected.q2 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q2: 2 }));
              }}
            />
            <label for="pd2">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod2"
              name="q2"
              value={3}
              checked={selected.q2 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q2: 3,
                }));
              }}
            />
            <label for="naod2">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "20px" }}
              type="radio"
              id="pa2"
              name="q2"
              value={4}
              checked={selected.q2 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q2: 4,
                }));
              }}
            />
            <label for="pa2">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa2"
              name="q2"
              value={5}
              checked={selected.q2 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q2: 5,
                }));
              }}
            />
            <label for="sa2">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            3. I can calm myself down when I am in distress or emotional pain.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd3"
              name="q3"
              value={1}
              checked={selected.q3 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q3: 1,
                }));
              }}
            />
            <label for="sd3">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd3"
              name="q3"
              value={2}
              checked={selected.q3 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q3: 2 }));
              }}
            />
            <label for="pd3">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod3"
              name="q3"
              value={3}
              checked={selected.q3 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q3: 3,
                }));
              }}
            />
            <label for="naod3">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa3"
              name="q3"
              value={4}
              checked={selected.q3 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q3: 4,
                }));
              }}
            />
            <label for="pa3">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa3"
              name="q3"
              value={5}
              checked={selected.q3 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q3: 5,
                }));
              }}
            />
            <label for="sa3">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            4. I can motivate myself to accomplish a task I have been dreading.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd4"
              name="q4"
              value={1}
              checked={selected.q4 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q4: 1,
                }));
              }}
            />
            <label for="sd4">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd4"
              name="q4"
              value={2}
              checked={selected.q4 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q4: 2 }));
              }}
            />
            <label for="pd4">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod4"
              name="q4"
              value={3}
              checked={selected.q4 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q4: 3,
                }));
              }}
            />
            <label for="naod4">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa4"
              name="q4"
              value={4}
              checked={selected.q4 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q4: 4,
                }));
              }}
            />
            <label for="pa4">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa4"
              name="q4"
              value={5}
              checked={selected.q4 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q4: 5,
                }));
              }}
            />
            <label for="sa4">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            5. I am able to understand other’s perspective even when I disagree
            with them.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd5"
              name="q5"
              value={1}
              checked={selected.q5 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q5: 1,
                }));
              }}
            />
            <label for="sd5">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd5"
              name="q5"
              value={2}
              checked={selected.q5 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q5: 2 }));
              }}
            />
            <label for="pd5">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod5"
              name="q5"
              value={3}
              checked={selected.q5 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q5: 3,
                }));
              }}
            />
            <label for="naod5">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa5"
              name="q5"
              value={4}
              checked={selected.q5 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q5: 4,
                }));
              }}
            />
            <label for="pa5">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa5"
              name="q5"
              value={5}
              checked={selected.q5 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q5: 5,
                }));
              }}
            />
            <label for="sa5">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            6. I can approach a person about a wrongdoing without shouting or
            getting angry.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd6"
              name="q6"
              value={1}
              checked={selected.q6 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q6: 1,
                }));
              }}
            />
            <label for="sd6">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd6"
              name="q6"
              value={2}
              checked={selected.q6 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q6: 2 }));
              }}
            />
            <label for="pd6">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod6"
              name="q6"
              value={3}
              checked={selected.q6 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q6: 3,
                }));
              }}
            />
            <label for="naod6">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa6"
              name="q6"
              value={4}
              checked={selected.q6 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q6: 4,
                }));
              }}
            />
            <label for="pa6">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa6"
              name="q6"
              value={5}
              checked={selected.q6 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q6: 5,
                }));
              }}
            />
            <label for="sa6">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            7. I can convince a person to accomplish or do a disliked activity.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd7"
              name="q7"
              value={1}
              checked={selected.q7 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q7: 1,
                }));
              }}
            />
            <label for="sd7">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd7"
              name="q7"
              value={2}
              checked={selected.q7 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q7: 2 }));
              }}
            />
            <label for="pd7">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod7"
              name="q7"
              value={3}
              checked={selected.q7 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q7: 3,
                }));
              }}
            />
            <label for="naod7">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa7"
              name="q7"
              value={4}
              checked={selected.q7 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q7: 4,
                }));
              }}
            />
            <label for="pa7">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa7"
              name="q7"
              value={5}
              checked={selected.q7 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q7: 5,
                }));
              }}
            />
            <label for="sa7">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            8. I am able to express my views and opinions in a group setting
            without feeling sorry or guilty.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd8"
              name="q8"
              value={1}
              checked={selected.q8 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q8: 1,
                }));
              }}
            />
            <label for="sd8">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd8"
              name="q8"
              value={2}
              checked={selected.q8 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q8: 2 }));
              }}
            />
            <label for="pd8">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod8"
              name="q8"
              value={3}
              checked={selected.q8 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q8: 3,
                }));
              }}
            />
            <label for="naod8">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa8"
              name="q8"
              value={4}
              checked={selected.q8 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q8: 4,
                }));
              }}
            />
            <label for="pa8">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa8"
              name="q8"
              value={5}
              checked={selected.q8 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q8: 5,
                }));
              }}
            />
            <label for="sa8">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            9. I do not hold grudges or resentment against anyone is my
            workplace.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd9"
              name="q9"
              value={1}
              checked={selected.q9 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q9: 1,
                }));
              }}
            />
            <label for="sd9">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd9"
              name="q9"
              value={2}
              checked={selected.q9 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q9: 2 }));
              }}
            />
            <label for="pd9">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod9"
              name="q9"
              value={3}
              checked={selected.q9 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q9: 3,
                }));
              }}
            />
            <label for="naod9">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa9"
              name="q9"
              value={4}
              checked={selected.q9 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q9: 4,
                }));
              }}
            />
            <label for="pa9">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa9"
              name="q9"
              value={5}
              checked={selected.q9 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q9: 5,
                }));
              }}
            />
            <label for="sa9">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            10. I wake up every morning feeling peaceful and excited about the
            day.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd10"
              name="q10"
              value={1}
              checked={selected.q10 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q10: 1,
                }));
              }}
            />
            <label for="sd10">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd10"
              name="q10"
              value={2}
              checked={selected.q10 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q10: 2 }));
              }}
            />
            <label for="pd10">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod10"
              name="q10"
              value={3}
              checked={selected.q10 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q10: 3,
                }));
              }}
            />
            <label for="naod10">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa10"
              name="q10"
              value={4}
              checked={selected.q10 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q10: 4,
                }));
              }}
            />
            <label for="pa10">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa10"
              name="q10"
              value={5}
              checked={selected.q10 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q10: 5,
                }));
              }}
            />
            <label for="sa10">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            11. I feel fulfilled about my career and life.
            <br />
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sd11"
              name="q11"
              value={1}
              checked={selected.q11 === 1}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q11: 1,
                }));
              }}
            />
            <label for="sd11">Strongly Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pd11"
              name="q11"
              value={2}
              checked={selected.q11 === 2}
              onChange={() => {
                setSelected((prev) => ({ ...prev, q11: 2 }));
              }}
            />
            <label for="pd11">Partially disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="naod11"
              name="q11"
              value={3}
              checked={selected.q11 === 3}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q11: 3,
                }));
              }}
            />
            <label for="naod11">Neither Agree or Disagree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="pa11"
              name="q11"
              value={4}
              checked={selected.q11 === 4}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q11: 4,
                }));
              }}
            />
            <label for="pa11">Partially Agree</label>
            <br />
            <input
              style={{ marginRight: "10px" }}
              type="radio"
              id="sa11"
              name="q11"
              value={5}
              checked={selected.q11 === 5}
              onChange={() => {
                setSelected((prev) => ({
                  ...prev,
                  q11: 5,
                }));
              }}
            />
            <label for="sa11">Strongly Agree</label>
            <hr style={{ width: "50%" }}></hr>
            <div>
              <MDBBtn color="purple" onClick={testResult}>
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

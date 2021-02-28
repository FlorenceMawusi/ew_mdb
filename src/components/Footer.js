import React, {useContext} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBInput } from "mdbreact";
import emailjs from "emailjs-com";


const FooterPage = () => {
  
  function sendEmail(e) {
    e.preventDefault();
   
    emailjs
      .sendForm(
        "service_ualfy05",
        "template_e64nkv5",
        e.target,
        "user_3P7964RRuJrDViLiYKIO0"
      )
      .then(
        (result) => {
          
          console.log(result.text);
          alert("Message Successfully sent.");
        },
        (error) => {
          
          console.log(error.text);
          alert("There was an error, please try again");
        }
      );
  }
  return (
    <MDBFooter
      color="purple darken-2"
      className=" pt-4 mt-4"
      style={{ left: "0", right: "0", bottom: "0" }}
    >
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h2>
        <h6 className="text-center w-responsive mx-auto pb-5">
          Impressed with the app? Or find it faulty? Anything you would like to
          tell me? I'm only a message away!
        </h6>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5 mx-auto">
            <form onSubmit={sendEmail}>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0 text-white">
                    <MDBInput
                    style={{color: "white"}}
                      type="text"
                      id="contact-name"
                      name="from_name"
                      label="Your name"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                    style={{color: "white"}}
                      type="text"
                      id="contact-email"
                      label="Your email"
                      name="reply_to"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                    style={{color: "white"}}
                      type="text"
                      id="contact-subject"
                      label="Subject"
                      name="subject"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                    style={{color: "white"}}
                      type="textarea"
                      id="contact-message"
                      label="Your message"
                      name="message"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <div className="text-center text-md-left">
                <input
                  type="submit"
                  value="Send"
                  className="btn purple darken-4"
                  size="md"
                />
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> EmoWork </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;

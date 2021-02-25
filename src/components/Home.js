import React from "react";
import { useHistory } from "react-router-dom";
import {
  MDBBtn,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

export default function Home() {
  const history = useHistory();
  return (
    <>
      <MDBContainer style={{ maxWidth: "100%", Height: "50rem", padding: 0 }}>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/cshx45D.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption style={{ bottom: "50%" }}>
                <h3 className="h3-responsive">Welcome to EmoWork</h3>
                <p>Where Emotion and Productivity Meet</p>
                <MDBBtn
                  color="purple"
                  onClick={() => {
                    history.push(`/signup`);
                  }}
                >
                  Get Started
                </MDBBtn>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/9uQ5URi.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption style={{ bottom: "50%" }}>
                <h3 className="h3-responsive">Welcome to EmoWork</h3>
                <p>Where Emotion and Productivity Meet</p>
                <MDBBtn
                  color="purple"
                  onClick={() => {
                    history.push(`/signup`);
                  }}
                >
                  Get Started
                </MDBBtn>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/RAz5j0Y.jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption style={{ bottom: "50%" }}>
                <h3 className="h3-responsive">Welcome to EmoWork</h3>
                <p>Where Emotion and Productivity Meet</p>
                <MDBBtn
                  color="purple"
                  onClick={() => {
                    history.push(`/signup`);
                  }}
                >
                  Get Started
                </MDBBtn>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      
    </>
  );
}

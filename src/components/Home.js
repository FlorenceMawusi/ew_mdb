import React from "react";
import ReactPlayer from "react-player";
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
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Why is it so great?
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          Research shows that 90% of your decisions are based on your your
          emotions, even if you think they are rational. That is why it is very
          important to be a master of your own emotions. Imagine if you could
          change your emotions when the need arises. You could greatly change
          your performance at work.
          <br />
          <br />
          No more performance anxieties, no more stage frights, more
          assertiveness and motivation towards an activity. Do take the daily
          prompts seriously and try not to miss a day for optimal results. The
          prompts are advised to be done in the morning right when you wake up
          or in the evening before bed as your mind is more suggestable to
          change at these times.
        </p>
        <hr style={{ width: "50%" }}></hr>
        <MDBRow className="p-4" md="9">
          <MDBCol md="10" className="mx-auto">
            <MDBRow>
              <MDBCol md="6">
                <MDBIcon icon="praying-hands" size="3x" className="red-text" />
                <h5 className="font-weight-bold my-4"></h5>
                <p className="lead grey-text mb-md-0 mb-5"> 
                  I have also put these five minute guided meditations for you
                  to follow. Pick one out of the three on a daily basis and
                  follow. It can be done in the morning or evening. This
                  meditation exercise will help you to monitor your own
                  thoughts, body sensations, and feelings.
                </p>
              </MDBCol>
              <MDBCol md="6">
                <MDBIcon icon="chart-line" size="3x" className="cyan-text" />
                <h5 className="font-weight-bold my-4"></h5>
                <p className=" lead grey-text mb-md-0 mb-5">
                  It will prepare your mind for the daily emotional intelligence
                  training exercises and will speed up the changes that will take
                  place in your subconscious mind for an optimal increase of
                  your EI during the experimentation period.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr style={{ width: "30%", margin: "auto" }}></hr>
        <br></br>
        <MDBRow>
          <MDBCol md="6" className="mx-auto">
            
              <ReactPlayer url="https://youtu.be/YFSc7Ck0Ao0" />
              <br />
              <ReactPlayer url="https://youtu.be/I-SFdhVwrVA" />
              <br />
              <ReactPlayer url="https://youtu.be/nmFUDkj1Aq0" />
              <br />
            
          </MDBCol>
        </MDBRow>

        <p className="lead grey-text w-responsive mx-auto mb-5">
          All the best and we hope you enjoy the application!
        </p>
      </section>
    </>
  );
}
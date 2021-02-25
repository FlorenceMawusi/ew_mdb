import React from "react";
import { MDBIcon } from "mdbreact";

const SpinnerPage = () => {
  return (
    <div
      style={{
        display: "flex",
        zIndex: "99",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDBIcon icon="spinner" spin size="5x" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerPage;

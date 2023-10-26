import React, { useState } from "react";
import { Link } from "react-router-dom";

const TestError = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const ErrorBoundaryTest = (e) => {
    e.preventDefault();
    setErrorMessage(e.target.value);
  };

  const handlError = () => {
    throw new Error("Something Went Wrong!!! Contact Our Team For Help");
  };
  return (
    
      <div className="error-text">
        <code>Type 'error' To See Error Boundary</code>
        <input
          className="form-control"
          type="text"
          placeholder="Type here"
          onChange={ErrorBoundaryTest}
          value={errorMessage}
          autoFocus
        />
        {errorMessage === "error" ? (
          <div className="">
        {handlError}
            <h1>OOps! Something terrible happened... Try again later.</h1>
            <Link to="/">Home page</Link>
          </div>
        ) : (
          ""
        )}
      </div>
  );
};

export default TestError;

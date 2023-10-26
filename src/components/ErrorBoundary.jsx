import { Component } from "react";
import { Outlet } from "react-router-dom";
import TestError from "../pages/TestError";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log("Logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <TestError />
          <h1>Something Went Wrong!!! Contact Our Team For Help</h1>
          {/* <a href='/' className="btn btn-primary">⬅Back To Home</a> */}
        </>
      );
    }
    return <Outlet />;
  }
}

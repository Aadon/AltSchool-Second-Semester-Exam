import React from "react";
import { Outlet } from "react-router-dom";
import Fallback from "./FallBack";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        hasError: false,
        error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    if (this.state.hasError) {
      return <Fallback error={this.state.error} />
    }
    return <Outlet />;
  }
}

export default ErrorBoundary;
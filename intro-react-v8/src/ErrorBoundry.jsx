import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundry extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to home page.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

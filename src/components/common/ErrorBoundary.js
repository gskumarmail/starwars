import React, { Component } from 'react';

/**
 * ErrorBoundary component that catches errors in its child components.
 * It displays a custom error message when an error occurs.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false, // Flag indicating if an error has occurred
      error: null, // The error object that caused the error
      errorInfo: null // Stack trace information of where the error occurred
    };
  }

  /**
   * Lifecycle method that captures the error details when an error occurs in its child components.
   * @param {Error} error - The error object thrown in the child component.
   * @param {Object} errorInfo - Stack trace and component information where the error occurred.
   */
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Display custom error UI when an error occurs
      return (
        <div className="alert alert-danger" role="alert">
          <h4>Oops! Something went wrong.</h4>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Component Stack Error Details:</p>
          <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
        </div>
      );
    }
    // Render the child components if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;

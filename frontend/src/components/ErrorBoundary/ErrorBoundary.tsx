import Lottie from "lottie-react";
import { Component, ErrorInfo, ReactNode } from "react";
import errorAnimation from "../../assets/animations/animation_error.json";

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error.message || "An unexpected error occurred.",
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen mx-auto text-center flex flex-col justify-center">
          <Lottie
            animationData={errorAnimation}
            loop={true}
            autoPlay={true}
            className="mx-auto grayscale w-[300px]"
          ></Lottie>
          <h1 className="mt-4 text-xl">Something went wrong!</h1>
          <p className="text-neutral-400 text-md">
            {this.state.errorMessage}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

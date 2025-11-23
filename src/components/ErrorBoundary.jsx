import { Component } from "react";
import { KarrarLogoSVG2 } from "../assets/svg";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background-black flex flex-col items-center justify-center px-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-12">
              <KarrarLogoSVG2 />
            </div>
            <div className="border-l-2 border-primary pl-3">
              <h1 className="font-cinzel text-xl text-white">
                Karrar Design Projects
              </h1>
            </div>
          </div>
          
          <div className="h-[1px] w-32 mb-8 bg-gradient-to-r from-transparent via-zinc-400 to-transparent"></div>
          
          <div className="text-center max-w-md">
            <h2 className="text-white text-2xl font-cinzel mb-4">
              Something went wrong
            </h2>
            <p className="text-zinc-400 mb-6">
              We encountered an unexpected error. Please try reloading the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-primary hover:bg-primary/80 text-black font-medium px-6 py-3 rounded transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
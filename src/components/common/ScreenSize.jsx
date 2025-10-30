import React, { useState, useEffect } from "react";

const ScreenSizeDisplay = () => {
  const [screenSize, setScreenSize] = useState("Loading...");

  // Function to determine screen size based on window width
  const getScreenSize = () => {
    const width = window.innerWidth;

    if (width >= 1280) {
      return "xl";
    } else if (width >= 1024) {
      return "lg";
    } else if (width >= 768) {
      return "md";
    } else if (width >= 640) {
      return "sm";
    } else {
      return "xs";
    }
  };

  // Effect hook to update screen size on window resize or initial load
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(getScreenSize());
    };

    // Call once to set initial screen size
    updateScreenSize();

    // Add event listener to update screen size when window is resized
    window.addEventListener("resize", updateScreenSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 size-[50px] flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-semibold">
      <span>{screenSize}</span>
    </div>
  );
};

export default ScreenSizeDisplay;

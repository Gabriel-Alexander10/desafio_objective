import { useEffect, useState } from "react";



function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = process.browser ? window : {
    innerWidth: 1440,
    innerHeight: 1024,
  };

  return {
    width,
    height
  };
}


export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (process.browser) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

  }, []);

  return windowDimensions;
}
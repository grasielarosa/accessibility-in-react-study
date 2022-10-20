import { useEffect } from "react";
import "../styles/globals.css";
import { axeAccessibilityReport } from "../utils/axeAccessibilityReport";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axeAccessibilityReport();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

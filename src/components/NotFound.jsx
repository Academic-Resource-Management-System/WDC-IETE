import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./NotFound.css"; // Import a CSS file for styling

// Flag to track whether the Spline viewer script has been loaded
let splineViewerScriptLoaded = false;

function NotFound() {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!splineViewerScriptLoaded) {
      // Load the Spline viewer script only once
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@0.9.436/build/spline-viewer.js";
      script.async = true;

      script.onload = () => {
        if (viewerRef.current && !viewerRef.current.querySelector("spline-viewer")) {
          // Create the spline-viewer element and set its URL
          const viewer = document.createElement("spline-viewer");
          viewer.setAttribute(
            "url",
            "https://prod.spline.design/Qo637eMYyMYcWGBM/scene.splinecode"
          );

          // Append the viewer to the desired element
          viewerRef.current.appendChild(viewer);
          splineViewerScriptLoaded = true; // Set the flag to true to prevent reloading
        }
      };

      // Append the script to the document
      document.body.appendChild(script);

      // Clean up the script element when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="not-found-container">
      {/* Render the "404 - Not Found" content */}
      <div className="not-found-content">
        <center>
          <h1>404 - Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to="/">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>
        </center>
      </div>

      {/* Render the Spline viewer */}
      <div className="spline-viewer" ref={viewerRef}></div>
    </div>
  );
}

export default NotFound;

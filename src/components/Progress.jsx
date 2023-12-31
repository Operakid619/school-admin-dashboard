"use client";
import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "50%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 40 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100 
   
   
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 70 ? 0 : prevProgress + 1
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
      <style jsx>{`
        @media (max-width: 768px) {
          .MuiLinearProgress-root {
            width: 80%;
          }
        }
      `}</style>
    </Box>
  );
}

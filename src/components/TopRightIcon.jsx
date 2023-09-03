import React from "react";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
const TopRightIcon = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1000,
      }}
    >
      <PlayCircleFilledRoundedIcon size="2x" color="blue" />
    </div>
  );
};

export default TopRightIcon;

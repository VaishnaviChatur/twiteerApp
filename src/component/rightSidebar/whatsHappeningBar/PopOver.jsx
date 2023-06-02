import React from "react";
import { Popover, Button, Typography } from "@mui/material";

const PopoverIcon = ({ open, onClose, anchorEl, onNotInterestedClick }) => {
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Typography sx={{ p: 2 }}>
        <button onClick={onNotInterestedClick}>Not Interested</button>
        <button onClick={onClose}>This is spam</button>
      </Typography>
    </Popover>
  );
};

export default PopoverIcon;

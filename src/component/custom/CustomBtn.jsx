import React from "react";
import Button from "@mui/material/Button";

const CustomBtn = ({
  text,
  onClick,
  variant = "contained",
  color = "primary",
  disabled = false,
  sx = {},
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      disabled={disabled}
      sx={{
        px: 3, // horizontal padding
        py: 1.2, // vertical padding
        borderRadius: 1, // rounded corners
        textTransform: "capitalize",
        fontSize: "0.95rem",
        fontWeight: 500,
        boxShadow: "none",

        "&:hover": {
          boxShadow: "none",
          opacity: 0.9,
        },

        "&:disabled": {
          opacity: 0.6,
        },

        ...sx, // allow override
      }}
    >
      {text}
    </Button>
  );
};

export default CustomBtn;

import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CustomSearch = ({
  value,
  onChange,
  placeholder = "Search…",
  onSearch,
 
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <InputBase
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{ ml: 1, flex: 1 }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSearch) {
            onSearch(value);
          }
        }}
      />

      <IconButton
        onClick={() => onSearch && onSearch(value)}
        size="small"
        sx={{ ml: 1 }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default CustomSearch;

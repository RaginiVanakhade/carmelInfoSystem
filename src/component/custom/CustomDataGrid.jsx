import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const CustomDataGrid = ({
  rows = [],
  columns = [],
  pageSize = 10,
  height = 500,
  ...props
}) => {
  return (
    <Box sx={{ height, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20, 50]}
        sx={{
          border: "none",
          fontFamily: "Segoe UI ",
        }}
        {...props} // allows passing any extra DataGrid props
      />
    </Box>
  );
};

export default CustomDataGrid;

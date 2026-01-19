import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const CustomDataGrid = ({
  rows = [],
  columns = [],
  loading = false,
  pageSize = 10,
  checkboxSelection = false,
  onRowClick,
  height = 500,
  ...props
}) => {
  return (
    <Box sx={{ height, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20, 50]}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick
        onRowClick={onRowClick}
        sx={{
          border: "none",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f5f5f5",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#f9f9f9",
          },
        }}
        {...props} // allows passing any extra DataGrid props
      />
    </Box>
  );
};

export default CustomDataGrid;

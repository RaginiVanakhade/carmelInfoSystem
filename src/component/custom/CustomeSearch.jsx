import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ value, onChange, placeholder = "Search…" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
        py: 0.5,
        borderRadius: 2,
        borderColor: "grey.300",
        width: 300,
      }}
    >
      <SearchIcon color="action" />

      <InputBase
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{ ml: 1, flex: 1 }}
      />
    </Box>
  );
};

export default SearchInput;

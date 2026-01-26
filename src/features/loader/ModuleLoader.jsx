import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const ModuleLoader = () => {
  const loading = useSelector((state) => state.loader.loading);

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 999,
      }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default ModuleLoader;

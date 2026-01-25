// component/common/ModuleNotification.jsx
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "./notificationSlice";

const ModuleNotification = ({ position = "bottom" ,  horizontal = "left"}) => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.notification);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => dispatch(hideNotification())}
      anchorOrigin={{
        vertical: position === "top" ? "top" : "bottom",
        horizontal,
       
      }}
      sx={{
        position: "absolute", 
        mt: 6,
        ml: 2
      }}
    >
      <Alert severity={type} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ModuleNotification;

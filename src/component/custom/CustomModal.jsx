import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2, 
          py: 0.5,
          background: "linear-gradient(135deg, #1976d2, #1565c0)",
          color: "common.white",
        }}
      >
        <Typography variant="h6" fontWeight={500}>
          {title}
        </Typography>

        <IconButton
          onClick={onClose}
          sx={{
            color: "common.white",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent
        dividers
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        {children}
      </DialogContent>

      {/* Actions */}
      {actions && (
        <DialogActions
          sx={{
            backgroundColor: "background.default",
          }}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomModal;

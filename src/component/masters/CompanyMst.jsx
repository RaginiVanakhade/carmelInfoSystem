import { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import CustomBtn from "../custom/CustomBtn";
import CustomModal from "../custom/CustomModal";
import RegisterCompany from "../../services/masterservices/companymst.service";
import CompanyMstPg from "../../pages/master/companyMstPg";

const CompanyMst = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    CompM_name: "",
    CompM_AddreL1: "",
    CompM_AddreL2: "",
    CompM_City: "",
    CompM_State: "",
    CompM_Gst: "",
    CompM_AuthSign: "",
    CompM_Bank: "",
    CompM_AcNo: "",
    CompM_Ifsc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      console.log("Submitted Data:", formData);

      const res = await RegisterCompany(formData);

      console.log("API Success:", res);

      setOpen(false); // close modal on success
    } catch (error) {
      console.error("API Error:", error.message);
      alert(error.message || "Server error");
    }
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#fafafa", minHeight: "80vh" }}>
      {/* Header */}
      <Box
        sx={{
          mb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography fontSize={20} fontWeight={600}>
            Company Master
          </Typography>
          <Typography fontSize={13} color="text.secondary">
            Manage registered companies
          </Typography>
        </Box>

        <CustomBtn text="New Company" onClick={() => setOpen(true)} />
      </Box>

      {/* Grid container */}
      <Box
        sx={{
          border: "1px solid #e5e7eb",
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <CompanyMstPg />
      </Box>

      {/* Modal */}
      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        title="New Company"
        maxWidth="md"
        actions={
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
              px: 3,
              py: 2,
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <Button onClick={() => setOpen(false)} color="inherit">
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Create
            </Button>
          </Box>
        }
      >
        <Box sx={{ px: 2 }}>
          {/* Company Details */}
          {/* <Typography fontSize={14} fontWeight={600} mb={1}>
            Company details
          </Typography> */}
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <TextField
                label="Company name"
                name="CompM_name"
                value={formData.CompM_name}
                onChange={handleChange}
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Address line 1"
                name="CompM_AddreL1"
                value={formData.CompM_AddreL1}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Address line 2"
                name="CompM_AddreL2"
                value={formData.CompM_AddreL2}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="City"
                name="CompM_City"
                value={formData.CompM_City}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="State"
                name="CompM_State"
                value={formData.CompM_State}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="GST number"
                name="CompM_Gst"
                value={formData.CompM_Gst}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Authorized signatory"
                name="CompM_AuthSign"
                value={formData.CompM_AuthSign}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>

          {/* Banking */}
          {/* <Typography fontSize={14} fontWeight={600} mt={4} mb={1}>
            Banking
          </Typography> */}
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2.5}>
            <Grid item xs={6}>
              <TextField
                label="Bank name"
                name="CompM_Bank"
                value={formData.CompM_Bank}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Account number"
                name="CompM_AcNo"
                value={formData.CompM_AcNo}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="IFSC code"
                name="CompM_Ifsc"
                value={formData.CompM_Ifsc}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
      </CustomModal>
    </Box>
  );
};

export default CompanyMst;

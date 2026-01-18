import { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    <div>
      <CustomBtn text="Create" onClick={() => setOpen(true)} />

      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        title="Create Company"
        actions={
          <>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>
              Save
            </Button>
          </>
        }
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              name="CompM_name"
              value={formData.CompM_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address Line 1"
              name="CompM_AddreL1"
              value={formData.CompM_AddreL1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address Line 2"
              name="CompM_AddreL2"
              value={formData.CompM_AddreL2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="City"
              name="CompM_City"
              value={formData.CompM_City}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="State"
              name="CompM_State"
              value={formData.CompM_State}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="GST Number"
              name="CompM_Gst"
              value={formData.CompM_Gst}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Authorized Signatory"
              name="CompM_AuthSign"
              value={formData.CompM_AuthSign}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Bank Name"
              name="CompM_Bank"
              value={formData.CompM_Bank}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Account Number"
              name="CompM_AcNo"
              value={formData.CompM_AcNo}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="IFSC Code"
              name="CompM_Ifsc"
              value={formData.CompM_Ifsc}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </CustomModal>
      <CompanyMstPg/>
    </div>
  );
};

export default CompanyMst;

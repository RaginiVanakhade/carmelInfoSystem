import { authkey } from "../../api/auth";
import { CompanyReg ,GetCompanyMst } from "../../api/companymst";

// const CompanyReg = CompanyReg

const RegisterCompany = async (formData) => {
  try {
    const payload = {
      ...formData,
      AuthKey: authkey,
    };

    console.log("Submitting Payload:", payload);

    const response = await fetch(CompanyReg, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Success:", result);
      alert("Company Created Successfully");
    } else {
      console.error("API Error:", result);
      alert(result.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Network Error:", error);
    alert("Server error");
  }
};


const GetAllCompany = async () => {
  try {
    const response = await fetch(GetCompanyMst, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AuthKey: authkey,
      },
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Success:", result);
      return result;
    } else {
      console.error("API Error:", result);
      alert(result.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Network Error:", error);
    alert("Server error");
  }
};

export default { RegisterCompany, GetAllCompany };

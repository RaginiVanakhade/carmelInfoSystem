import { authkey } from "../../api/auth";
import { CompanyReg, GetCompanyMst } from "../../api/companymst";

const RegisterCompany = async (formData) => {
  const payload = {
    ...formData,
    AuthKey: authkey,
  };

  const response = await fetch(CompanyReg, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Company registration failed");
  }

  return result;
};

const GetAllCompany = async () => {
  const auth = "YLkCewg6CIc0keV6DfyJ0dlqVRkmgeMp"
  const response = await fetch(GetCompanyMst, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY" : auth
    },
    body: JSON.stringify({
      AuthKey: authkey,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch companies");
  }

  return result;
};

export default { RegisterCompany, GetAllCompany };

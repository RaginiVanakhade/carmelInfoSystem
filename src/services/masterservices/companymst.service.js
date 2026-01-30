import { authkey, xapiekey } from "../../api/auth";
import {
  CompanyReg,
  GetCompanyMst,
  GetCompanyById,
} from "../../api/companymst";

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
  const response = await fetch(GetCompanyMst, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-API-KEY": xapiekey,
    },
    body: new URLSearchParams({
      AuthKey: authkey,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.status) {
    throw new Error(result.message || "Failed to fetch companies");
  }

  return result;
};

const GetComByComId = async (companyId) => {
  const response = await fetch(GetCompanyById, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      AuthKey: authkey,
      CompanyId: companyId,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.status) {
    throw new Error(result.message || "Failed to fetch companies");
  }

  return result;
};

const UpdateCompany = async (formData) => {
  if (!formData.CompM_id) {
    throw new Error("Company ID is missing for update");
  }

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
    throw new Error(result.message || "Company update failed");
  }

  return result;
};

export default { RegisterCompany, GetAllCompany, GetComByComId, UpdateCompany };

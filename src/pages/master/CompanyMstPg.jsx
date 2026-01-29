import CustomDataGrid from "../../component/custom/CustomDataGrid";
import { useQuery } from "@tanstack/react-query";
import  CompanyService from "../../services/masterservices/companymst.service";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridActionsCellItem } from "@mui/x-data-grid";

const CompanyMstPg = () => {
  const { data, } = useQuery({
    queryKey: ["companyList"],
    queryFn: CompanyService.GetAllCompany,
  });
  
  useEffect(() => {
    console.log("Fetched company Data:", data)
  }, [data])


  const handleEdit = () => {
    console.log("edit clicked")
  }
  const handleDelete = () => {
    console.log("delete clicked")
  }

  const columns = [
    { field: "CompM_id", headerName: "ID", width: 80 },
    { field: "CompM_name", headerName: "Company Name", flex: 1, minWidth: 200 },
    { field: "CompM_AddreL1", headerName: "Address Line 1", width: 200 },
    { field: "CompM_AddreL2", headerName: "Address Line 2", width: 200 },
    { field: "CompM_City", headerName: "City", width: 130 },
    { field: "CompM_State", headerName: "State", width: 130 },
    { field: "CompM_Gst", headerName: "GST No", width: 160 },
    { field: "CompM_AuthSign", headerName: "Authorized Signatory", width: 180 },
    { field: "CompM_Bank", headerName: "Bank Name", width: 160 },
    { field: "CompM_AcNo", headerName: "Account Number", width: 180 },
    { field: "CompM_Ifsc", headerName: "IFSC Code", width: 140 },
    
   {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 120,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        onClick={() => handleEdit(params.row)}
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={() => handleDelete(params.row)}
        sx={{ color: "error.main" }}
      />,
    ],
  },
  ];

  return (
    <div>
      <CustomDataGrid rows={data?.data || []} columns={columns}  getRowId={(row) => row.CompM_id}/>
    </div>
  );
};

export default CompanyMstPg;

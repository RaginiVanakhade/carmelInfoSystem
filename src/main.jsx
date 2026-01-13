import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login.jsx";
// import SignUp from './auth/SignUp.jsx'
import HomeLayout from "./pages/HomeLayout.jsx";

import CompanyMst from "./component/masters/CompanyMst.jsx";
import BookStatesMst from "./component/masters/BookStatesMst.jsx";
import CustomerMst from "./component/masters/CustomerMst.jsx";
import VendorMst from "./component/masters/VendorMst.jsx";
import LocationMst from "./component/masters/LocationMst.jsx"
import ServiceMst from "./component/masters/ServiceMst.jsx"
import ServiceProductMst from "./component/masters/ServiceProductMst.jsx";
import SkillsCategoryMst from "./component/masters/SkillsCategoryMst.jsx";
import SkillMst from "./component/masters/SkillMst.jsx";
import CountryMst from "./component/masters/CountryMst.jsx";
import StateMst from "./component/masters/StateMst.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <HomeLayout />,
  },
  {
    path: "/master",
    element: <HomeLayout />,
    children: [
      { path: "companymaster", element: <CompanyMst /> },
      { path: "bookstatesmaster", element: <BookStatesMst /> },
      { path: "customermaster", element: <CustomerMst /> },
      { path: "vendormaster", element: <VendorMst /> },
      { path: "locationmaster", element: <LocationMst /> },
      { path: "servicemaster", element: <ServiceMst /> },
      { path: "serviceproductmaster", element: <ServiceProductMst /> },
      { path: "skillscategorymaster", element: <SkillsCategoryMst /> },
      { path: "skillmaster", element: <SkillMst /> },
      { path: "countrymaster", element: <CountryMst /> },
      { path: "statemaster", element: <StateMst /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

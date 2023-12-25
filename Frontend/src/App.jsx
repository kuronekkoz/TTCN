import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Main from "./components/layout/Main";

import ServicePage from "./pages/ServicePage";

import AppointmentPage from "./pages/AppointmentPage";
import ContactPage from "./pages/ContactPage";
import IntroducePage from "./pages/IntroducePage";
import Header from "./components/layout/Header";
import SignIn from "./dashboard/SignIn";
<<<<<<< HEAD
// import Dashboard from "dashboard/Dashboard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Dashboard from "./dashboard/Dashboard";
import EmployeeAdmin from "./pages/admin/EmployeeAdmin";
import AppointmentAdmin from "./pages/admin/AppointmentAdmin";
import ServiceAdmin from "./pages/admin/ServiceAdmin";
import AccountAdmin from "./pages/admin/AccountAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
=======
import Dashboard from "./dashboard/Dashboard";
// import Dashboard from "dashboard/Dashboard";
import Host from "./dashboard/Host";
import Service from "./dashboard/Service";
>>>>>>> 8ffc82f1f8a3b95f575e42c4466ae3a8da5713d1

function App() {
  return (
    <Fragment>
<<<<<<< HEAD
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Main></Main>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="appointment" element={<AppointmentPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
            <Route path="info" element={<IntroducePage />}></Route>
            <Route path="service" element={<ServicePage />}></Route>
            <Route path="login" element={<SignIn></SignIn>}></Route>
          </Route>
          <Route path="/admin" element={<Dashboard></Dashboard>}>
            <Route index element={<DashboardAdmin></DashboardAdmin>}></Route>
            <Route
              path="employee"
              element={<EmployeeAdmin></EmployeeAdmin>}
            ></Route>
            <Route
              path="appointment"
              element={<AppointmentAdmin></AppointmentAdmin>}
            ></Route>
            <Route
              path="service"
              element={<ServiceAdmin></ServiceAdmin>}
            ></Route>
            <Route
              path="account"
              element={<AccountAdmin></AccountAdmin>}
            ></Route>
          </Route>
        </Routes>
      </LocalizationProvider>
=======
      {/* <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="Dat-lich-kham" element={<AppointmentPage />}></Route>
          <Route path="Lien-he" element={<ContactPage />}></Route>
          <Route path="Gioi-thieu" element={<IntroducePage />}></Route>
          <Route path="Dich-vu" element={<ServicePage />}></Route>
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Host></Host>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="dashboard" element={<AppointmentPage />}></Route>
          <Route path="appointment-accepted" element={<ContactPage />}></Route>
          <Route path="service" element={<Service />}></Route>
          <Route path="employee" element={<ServicePage />}></Route>
          <Route path="report" element={<ServicePage />}></Route>
          <Route path="account" element={<ServicePage />}></Route>
        </Route>
      </Routes>
      {/* <SignIn></SignIn> */}
      {/* <Dashboard></Dashboard> */}
>>>>>>> 8ffc82f1f8a3b95f575e42c4466ae3a8da5713d1
      {/* <DropDown></DropDown> */}
      {/* <Header></Header> */}
      {/* <Test></Test> */}
    </Fragment>
  );
}

export default App;

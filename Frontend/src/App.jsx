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
import Dashboard from "./dashboard/Dashboard";
// import Dashboard from "dashboard/Dashboard";
import Host from "./dashboard/Host";
import Service from "./dashboard/Service";

function App() {
  return (
    <Fragment>
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
      {/* <DropDown></DropDown> */}
      {/* <Header></Header> */}
      {/* <Test></Test> */}
    </Fragment>
  );
}

export default App;

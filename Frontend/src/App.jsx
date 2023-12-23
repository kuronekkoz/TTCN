import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Main from "./components/layout/Main";

import ServicePage from "./pages/ServicePage";

import AppointmentPage from "./pages/AppointmentPage";
import ContactPage from "./pages/ContactPage";
import IntroducePage from "./pages/IntroducePage";
import Header from "./components/layout/Header";
// import Dashboard from "dashboard/Dashboard";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="Dat-lich-kham" element={<AppointmentPage />}></Route>
          <Route path="Lien-he" element={<ContactPage />}></Route>
          <Route path="Gioi-thieu" element={<IntroducePage />}></Route>
          <Route path="Dich-vu" element={<ServicePage />}></Route>
        </Route>
      </Routes>

      {/* <DropDown></DropDown> */}
      {/* <Header></Header> */}

      {/* <DichVuPage></DichVuPage> */}
      {/* <Dashboard></Dashboard> */}
      {/* <CustomDatePicker></CustomDatePicker> */}
      {/* <DatLichKhamForm></DatLichKhamForm> */}
    </Fragment>
  );
}

export default App;

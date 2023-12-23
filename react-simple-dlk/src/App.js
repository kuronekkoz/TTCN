import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import "swiper/scss";

import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import DatLichKhamPage from "pages/DatLichKhamPage";
import HomePage from "pages/HomePage";
import Main from "components/layout/Main";
import LienHePage from "pages/LienHePage";

import GioiThieuPage from "pages/GioiThieuPage";

import DichVuPage from "pages/DichVuPage";

import KhamVsDieuTri from "pages/DichVuPages/KhamVsDieuTri";
import Dashboard from "dashboard/Dashboard";
import DatLichKhamForm from "components/form/DatLichKhamForm";

import CustomDatePicker from "components/DatePicker/CustomDatePicker";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="Dat-lich-kham" element={<DatLichKhamPage />}></Route>
          <Route path="Lien-he" element={<LienHePage />}></Route>
          <Route path="Gioi-thieu" element={<GioiThieuPage />}></Route>
          <Route path="Dich-vu">
            <Route index element={<DichVuPage />}></Route>
            <Route path="Kham-va-dieu-tri" element={<KhamVsDieuTri />}></Route>
            <Route path="Xet-nghiem-chan-doan-hinh-anh"></Route>
            <Route path="Phau-thuat"></Route>
            <Route path="Phong-chong-ki-sinh-trung-tiem-phong"></Route>
            <Route path="Cham-soc-rang-mieng"></Route>
            <Route path="Tham-my"></Route>
            <Route path="Xuat-canh-cho-meo"></Route>
            <Route path="Luu-chuong"></Route>
            <Route path="Van-chuyen-kham-benh-tai-nha"></Route>
            <Route path="Cap-cuu"></Route>
          </Route>
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

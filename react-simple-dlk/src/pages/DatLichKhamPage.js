import DatLichKhamForm from "components/form/DatLichKhamForm";
import LuuYForm from "components/form/LuuYForm";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import React from "react";

const DatLichKhamPage = () => {
  return (
    <fracment>
      <div className="text-5xl fotn-bold my-20 ml-10">ĐẶTLỊCH KHÁM</div>
      <div className="body w-full flex flex-row">
        <div className="left-div flex w-1/2 pt-20">
          <LuuYForm></LuuYForm>
        </div>
        <div className="right-div w-1/2 items-end">
          <DatLichKhamForm></DatLichKhamForm>
        </div>
      </div>
    </fracment>
  );
};

export default DatLichKhamPage;

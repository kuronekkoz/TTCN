import DropDown from "components/dropdown/Dropdown";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row flex-items space-x-3 h-28 w-full border border-slate-900 bg-white  sticky top-0 z-50 sm:bg-transparent sm:shadow-none ">
      <div className="h-28 w-1/4 ">
        <img
          src="data:image/png;base64,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"
          alt=""
          className=" h-full w-1/2 ml-14 "
        />
      </div>
      <div className="flex space-x-4 mt-auto w-full pl-10">
        <div className="flex flex-row w-5/6 pb-10 pt-10 ">
          <ul className=" flex flex-row space-x-32 text-2xl pb-10" id="header">
            <li className="cursor-pointer ">
              <NavLink to="/">Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to="/Gioi-thieu">Giới thiệu </NavLink>
            </li>
            <li>
              <NavLink to="/Dich-vu">Dịch vụ</NavLink>
            </li>
            <li>
              <NavLink to="/Dat-lich-kham">Đặt lịch khám</NavLink>
            </li>
            <li>
              <NavLink to="/Lien-he">Liên hệ</NavLink>
            </li>
          </ul>
          {/* <DropDown></DropDown> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

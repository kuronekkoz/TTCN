import React from "react";
import items from "../components/data/dichvu.json";
import DichVuItems from "components/items/DichVuItems";
const DichVuPage = () => {
  return (
    <>
      <h1 className="mt-32 text-4xl font-bold ml-5">Dịch vụ</h1>

      <banner></banner>
      <div className="my-32 container m-auto grid grid-cols-3 gap-x-14 gap-y-20 ">
        {items.map((item, index) => (
          <DichVuItems key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default DichVuPage;

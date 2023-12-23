import { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import axios from "axios";

import SelectDropdown from "../dropdown/SelectDropdown";
import CustomDatePicker from "../datePicker/CustomDatePicker";

// using react-hook-form

const schemaValidation = Yup.object({
  name: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),

  phoneNumber: Yup.string()
    .required("Please enter your phone number")
    .min(10, "Must be 10 characters"),
  address: Yup.string().required("Please enter your address"),

  email: Yup.string().email().required("Please enter your email"),

  generic: Yup.string().required("Please enter your pet's generic"),
});

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
  } = useForm({ resolver: yupResolver(schemaValidation), mode: "onChange" });

  const selectedDate = watch("datePicker");

  const onSubmit = (values) => {
    console.log("onSubmit ~ values", typeof values.datePicker);
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[750px] mx-auto flex flex-col"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="firstName">Họ và tên:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="p-4 rounded-md border border-gray-10 text-black  "
            {...register("name")}
            //defaultValue={}
          />
          {errors?.name && (
            <div className="text-red-500 text-sm ">{errors.name?.message}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="phoneNumber">Số điện thoại:</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Enter your phone number"
          className="p-4 rounded-md border border-gray-100 text-black"
          {...register("phoneNumber")}
        />
        {errors?.phoneNumber && (
          <div className="text-red-500 text-sm ">
            {errors.phoneNumber?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="phoneNumber">Địa chỉ:</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          className="p-4 rounded-md border border-gray-100 text-black"
          {...register("address")}
        />
        {errors?.address && (
          <div className="text-red-500 text-sm ">{errors.address?.message}</div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">email:</label>
        <MyInput
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
        ></MyInput>
        {errors?.email && (
          <div className="text-red-500 text-sm ">{errors.email?.message}</div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="generic"> Chủng loại:</label>
        <input
          type="text"
          id="generic"
          placeholder="Enter your pet's generic e.g: chó chihuahua,mèo mướp, ..."
          className="p-4 rounded-md border border-gray-100 text-black"
          {...register("generic")}
        />
        {errors?.generic && (
          <div className="text-red-500 text-sm ">{errors.generic?.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="datepicker"> Chọn thời gian khám:</label>

        <CustomDatePicker
          id="datePicker"
          selectedDate={selectedDate}
          onChange={(date) => setValue("datePicker", date)}
        ></CustomDatePicker>
      </div>

      <SelectDropdown
        id="dichVu"
        register={register("dichVu")}
      ></SelectDropdown>
      <div className=" flex justify-center items-center mt-10">
        <button
          type="submit"
          id="datlichkham"
          className="w-1/2 p-4 bg-blue-600 text-white font-semibold rounded-lg "
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Đặt lịch khám"
          )}
        </button>
      </div>
      <div></div>
    </form>
  );
};

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });

  return (
    <input
      className="p-4 rounded-md border border-gray-100 text-black"
      {...field}
      {...props}
    />
  );
};

export default AppointmentForm;

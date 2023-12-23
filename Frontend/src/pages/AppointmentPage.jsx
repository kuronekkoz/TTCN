import AppointmentForm from "../components/form/AppointmentForm";
import WarningForm from "../components/form/WarningForm";

const AppointmentPage = () => {
  return (
    <fracment>
      <div className="text-5xl fotn-bold my-20 ml-10">ĐẶTLỊCH KHÁM</div>
      <div className="body w-full flex flex-row">
        <div className="left-div flex w-1/2 pt-20">
          <WarningForm></WarningForm>
        </div>
        <div className="right-div w-1/2 items-end">
          <AppointmentForm></AppointmentForm>
        </div>
      </div>
    </fracment>
  );
};

export default AppointmentPage;

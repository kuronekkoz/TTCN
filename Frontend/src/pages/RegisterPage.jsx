import LuuYForm from "components/form/LuuYForm";
import RegisterForm from "components/form/RegisterForm";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";

const RegisterPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="body w-full flex flex-row">
        <div className="left-div flex w-1/2 pt-20">
          <LuuYForm></LuuYForm>
        </div>
        <div className="right-div w-1/2 items-end">
          <RegisterForm></RegisterForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RegisterPage;

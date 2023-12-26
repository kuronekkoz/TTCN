import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListItems = () => {
  const [userData, setUserData] = React.useState({});
  const navigate = useNavigate();
  React.useEffect(() => {
    const storedUserData = localStorage.getItem("loginInfo");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  const handleOnClickLogout = () => {
    localStorage.removeItem("loginInfo");
    toast.success("Logout thành công");
    navigate("/");
  };
  return (
    <React.Fragment>
      <ListItemButton>
        <NavLink to="/admin/" className="flex">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="flex" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <NavLink to="/admin/appointment" className="flex">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Quản lí đơn đăng kí" />
        </NavLink>
      </ListItemButton>
      {userData?.user?.role === 1 ? (
        <ListItemButton>
          <NavLink to="/admin/employee" className="flex">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Quản lí nhân viên" />
          </NavLink>
        </ListItemButton>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <ListItemButton>
        <NavLink to="/admin/service" className="flex">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Quản lí dịch vụ" />
        </NavLink>
      </ListItemButton>
      {userData?.user?.role === 1 ? (
        <ListItemButton>
          <React.Fragment>
            <NavLink to="/admin/account" className="flex">
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Tài khoản" />
            </NavLink>
          </React.Fragment>
        </ListItemButton>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Đăng xuất" onClick={handleOnClickLogout} />
      </ListItemButton>
    </React.Fragment>
  );
};

export default ListItems;

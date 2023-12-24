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
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <NavLink to="/admin/">
          <ListItemText primary="Dashboard" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <NavLink to="/admin/appointment">
          <ListItemText primary="Appointments" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <NavLink to="/admin/employee">
          <ListItemText primary="Employees" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <NavLink to="/admin/service">
          <ListItemText primary="Services" />
        </NavLink>
      </ListItemButton>
      {userData?.user?.role === 1 ? (
        <ListItemButton>
          <React.Fragment>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <NavLink to="/admin/account">
              <ListItemText primary="Accounts" />
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
        <ListItemText primary="Log out" onClick={handleOnClickLogout} />
      </ListItemButton>
    </React.Fragment>
  );
};

export default ListItems;

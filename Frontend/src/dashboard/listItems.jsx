import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { NavLink } from "react-router-dom";

const ListItems = () => {
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
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <NavLink to="/admin/account">
          <ListItemText primary="Accounts" />
        </NavLink>
      </ListItemButton>
    </React.Fragment>
  );
};

export default ListItems;

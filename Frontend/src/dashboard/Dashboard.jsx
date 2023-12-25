

import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
<<<<<<< HEAD
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Outlet } from "react-router-dom";
import ListItems from "./listItems";
=======


import Board from "./Board";
>>>>>>> 8ffc82f1f8a3b95f575e42c4466ae3a8da5713d1




// TODO remove, this demo shouldn't need to reset the theme.


export default function Dashboard() {
<<<<<<< HEAD
  const [open, setOpen] = React.useState(true);
  const [userData, setUserData] = React.useState({});
  React.useEffect(() => {
    const storedUserData = localStorage.getItem("loginInfo");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      navigate("/login");
    }
  }, []);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItems></ListItems>
            <div className="mt-4 flex justify-center items-center">
              <span className="text-xl text-yellow-600">
                Xin chào {userData?.user?.username}
              </span>
            </div>
          </List>
        </Drawer>
=======
 


  return ( 
>>>>>>> 8ffc82f1f8a3b95f575e42c4466ae3a8da5713d1
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="2xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Outlet />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        
      </Box>
   
  );
}



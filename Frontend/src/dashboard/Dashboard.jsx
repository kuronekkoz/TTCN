

import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


import Board from "./Board";




// TODO remove, this demo shouldn't need to reset the theme.


export default function Dashboard() {
 


  return ( 
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
                  <Board />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        
      </Box>
   
  );
}



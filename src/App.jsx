import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';


// const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode , setMode]=React.useState(localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light")
  
  
  const theme = createTheme({
  palette: {
    mode, 
  },
});
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar mode={mode} setMode={setMode} open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose}  />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
           <Outlet />
        </Box>
      </Box>
     </ThemeProvider>

     

    </>
  );
}

import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import propsTypes from "prop-types";
import CustomToastContainer from "../components/ui/CustomToastContainer";

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <CustomToastContainer />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Navbar onMenuClick={toggleDrawer} />
        <Sidebar open={open} onClose={toggleDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8,
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <Container maxWidth="lg">{children}</Container>
        </Box>
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: propsTypes.node,
};

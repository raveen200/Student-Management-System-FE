import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { User, ShoppingCart } from "lucide-react";
import propsTypes from "prop-types";
import Logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import CartDrawer from "../components/ui/CustomCart";
import {  useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function Navbar({ onMenuClick }) {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const [cartOpen, setCartOpen] = useState(false);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    Cookies.remove("token");
    navigate("/login");
  };

  const itemCount = useSelector((state) => state.mgt.cartCourses);
  const profileDetails = useSelector((state) => state.mgt.loginEmail_Role);
  const DP = apiUrl + "/" + profileDetails.profilePicture;


  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <img src={Logo} alt="logo" className="h-11 gap-" />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            School MGT
          </Typography>
          {!isLoginPage && !isSignupPage && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount?.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {itemCount?.length}
                  </span>
                )}
              </button>

              <IconButton color="inherit" onClick={handleProfileClick}>
                <Avatar src={DP} alt="Profile Picture" />
              </IconButton>
            </Box>
          )}

          {!isLoginPage && !isSignupPage && (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          )}
        </Toolbar>
      </AppBar>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

Navbar.propTypes = {
  onMenuClick: propsTypes.func,
};

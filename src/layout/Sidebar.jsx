import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import propsTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { teacherMenuItems, studentMenuItems } from "../utils/data";
import { useSelector } from "react-redux";

const drawerWidth = 240;

export default function Sidebar({ open, onClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";


  const loginEmail_Role = useSelector((state) => state.mgt.loginEmail_Role);

  const menuItems =
    loginEmail_Role?.role === "teacher" ? teacherMenuItems : studentMenuItems;

  // const menuItems = teacherMenuItems;

  const drawerContent = (
    <Box sx={{ overflow: "auto", mt: 8 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => navigate(item.path)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "primary.main" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    !isLoginPage &&
    !isSignupPage &&
    (isMobile ? (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    ) : (
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
    ))
  );
}

Sidebar.propTypes = {
  open: propsTypes.bool,
  onClose: propsTypes.func,
};

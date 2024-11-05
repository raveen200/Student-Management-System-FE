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
import {
  Home,
  LayoutDashboard,
  Users,
  Settings,
  HelpCircle,
  FileText,
} from "lucide-react";
import propsTypes from "prop-types";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <Home size={20} /> },
  { text: "Dashboard", icon: <LayoutDashboard size={20} /> },
  { text: "Users", icon: <Users size={20} /> },
  { text: "Documents", icon: <FileText size={20} /> },
  { text: "Settings", icon: <Settings size={20} /> },
  { text: "Help", icon: <HelpCircle size={20} /> },
];

export default function Sidebar({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  const drawerContent = (
    <Box sx={{ overflow: "auto", mt: 8 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
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

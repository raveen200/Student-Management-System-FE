import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GridViewIcon from "@mui/icons-material/GridView";

export const teacherMenuItems = [
  {
    text: "Dashboard",
    icon: <HomeIcon size={20} />,
    path: "/teacher-dashboard",
  },
  { text: "Courses", icon: <AddBoxIcon size={20} />, path: "/addcourses" },
];

export const studentMenuItems = [
  { text: "Dashboard", icon: <HomeIcon size={20} />, path: "/dashboard" },
  {
    text: "Courses",
    icon: <GridViewIcon size={20} />,
    path: "/courseselection",
  },
];

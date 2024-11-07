import { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ClassIcon from "@mui/icons-material/Class";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StatCard from "../components/dashboard/StatCard";
import CourseProgress from "../components/dashboard/CourseProgress";
import { upcomingAssignments } from "../constants/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEnrollmentsAction } from "../redux/Actions";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.mgt.enrollments);
  useEffect(() => {
    const fetchEnrollments = async () => {
      await dispatch(getEnrollmentsAction());
    };
    fetchEnrollments();
  }, [dispatch]);

  return (
    <Box sx={{ py: 3 }}>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Student Dashboard
        </Typography>
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          color="primary"
          onClick={() => navigate("/courseselection")}
        >
          Find New Courses
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            icon={<ClassIcon size={32} color="primary" />}
            title="Enrolled Courses"
            value={enrolledCourses.length}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            icon={<CalendarMonthIcon size={32} color="primary" />}
            title="Assignments Due"
            value={upcomingAssignments.length}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <CourseProgress courses={enrolledCourses} />
        </Grid>
      </Grid>
    </Box>
  );
}

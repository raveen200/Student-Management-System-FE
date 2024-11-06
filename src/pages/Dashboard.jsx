import { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BookOpen,  Calendar, Bell } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import CourseProgress from "../components/dashboard/CourseProgress";
import Achievements from "../components/dashboard/Achievements";
import { upcomingAssignments, achievements } from "../constants/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEnrollmentsAction } from "../redux/Actions";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enrolledCourses = useSelector((state) => state.mgt.enrollments);
  console.log("enrolledCourses",enrolledCourses);
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
          startIcon={<Bell />}
          color="primary"
          onClick={() => navigate("/courseselection")}
        >
          Find New Courses
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            icon={<BookOpen size={32} color="#2563eb" />}
            title="Enrolled Courses"
            value={enrolledCourses.length}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            icon={<Calendar size={32} color="#2563eb" />}
            title="Assignments Due"
            value={upcomingAssignments.length}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <CourseProgress courses={enrolledCourses} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Achievements achievements={achievements} />
        </Grid>
      </Grid>
    </Box>
  );
}

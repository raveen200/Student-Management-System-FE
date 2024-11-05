import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BookOpen, Clock, Calendar, Bell } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import CourseProgress from "../components/dashboard/CourseProgress";
import Achievements from "../components/dashboard/Achievements";
import AssignmentList from "../components/dashboard/AssignmentList";
import {
  enrolledCourses,
  upcomingAssignments,
  achievements,
} from "../constants/index";

export default function Dashboard() {
  const [notifications] = useState(3);

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
        <Button variant="outlined" startIcon={<Bell />} color="primary">
          {notifications} New Notifications
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
            icon={<Clock size={32} color="#2563eb" />}
            title="Total Hours"
            value={45}
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

        <Grid size={{ xs: 12 }}>
          <AssignmentList assignments={upcomingAssignments} />
        </Grid>
      </Grid>
    </Box>
  );
}

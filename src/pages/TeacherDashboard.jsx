import { Box, Typography, Button } from "@mui/material";
import { Users, GraduationCap, BookOpen, Clock, Bell } from "lucide-react";
import Grid from "@mui/material/Grid2";
import TeacherStatCard from "../components/dashboard/TeacherStatCard";
import ClassSchedule from "../components/dashboard/ClassSchedule";
import StudentPerformance from "../components/dashboard/StudentPerformance";
import { todayClasses, studentPerformance } from "../constants/index";

export default function TeacherDashboard() {
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
        <Typography variant="h4">Teacher Dashboard</Typography>
        <Button
          variant="outlined"
          startIcon={<Bell size={20} />}
          color="primary"
        >
          5 New Messages
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <TeacherStatCard
            icon={<Users size={24} color="#2563eb" />}
            title="Total Students"
            value="156"
            subtitle="+12 this month"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <TeacherStatCard
            icon={<BookOpen size={24} color="#2563eb" />}
            title="Active Courses"
            value="8"
            subtitle="3 starting soon"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <TeacherStatCard
            icon={<Clock size={24} color="#2563eb" />}
            title="Hours Taught"
            value="245"
            subtitle="This month"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <TeacherStatCard
            icon={<GraduationCap size={24} color="#2563eb" />}
            title="Average Score"
            value="85%"
            subtitle="2% increase"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ClassSchedule classes={todayClasses} />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <StudentPerformance students={studentPerformance} />
        </Grid>
      </Grid>
    </Box>
  );
}

import { Box, Typography, Button } from "@mui/material";
import { Users, GraduationCap, BookOpen, Clock, Bell } from "lucide-react";
import Grid from "@mui/material/Grid2";
import TeacherStatCard from "../components/dashboard/TeacherStatCard";
import ClassSchedule from "../components/dashboard/ClassSchedule";
import StudentPerformance from "../components/dashboard/StudentPerformance";

const todayClasses = [
  {
    id: 1,
    subject: "Advanced Web Development",
    time: "09:00 AM - 10:30 AM",
    status: "completed",
    students: 25,
  },
  {
    id: 2,
    subject: "React Fundamentals",
    time: "11:00 AM - 12:30 PM",
    status: "ongoing",
    students: 30,
  },
  {
    id: 3,
    subject: "JavaScript Basics",
    time: "02:00 PM - 03:30 PM",
    status: "upcoming",
    students: 28,
  },
];

const studentPerformance = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    course: "Advanced Web Development",
    progress: 85,
    grade: 92,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    course: "React Fundamentals",
    progress: 70,
    grade: 78,
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://i.pravatar.cc/150?img=3",
    course: "JavaScript Basics",
    progress: 60,
    grade: 65,
  },
  {
    id: 4,
    name: "Sarah Williams",
    avatar: "https://i.pravatar.cc/150?img=4",
    course: "Advanced Web Development",
    progress: 90,
    grade: 95,
  },
];

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

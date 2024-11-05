import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  BookOpen,
  Clock,
  Calendar,
  Award,
  TrendingUp,
  Bell,
} from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import CourseProgress from "../components/dashboard/CourseProgress";
import Achievements from "../components/dashboard/Achievements";
import AssignmentList from "../components/dashboard/AssignmentList";

const enrolledCourses = [
  {
    id: 1,
    title: "Advanced Web Development",
    progress: 75,
    nextLesson: "React Hooks Deep Dive",
    instructor: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    progress: 45,
    nextLesson: "Statistical Analysis",
    instructor: "Prof. Michael Brown",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

const upcomingAssignments = [
  {
    id: 1,
    title: "React Project Submission",
    course: "Advanced Web Development",
    dueDate: "2024-03-20",
    status: "pending",
  },
  {
    id: 2,
    title: "Data Analysis Report",
    course: "Data Science Fundamentals",
    dueDate: "2024-03-22",
    status: "pending",
  },
];

const achievements = [
  {
    id: 1,
    title: "Perfect Attendance",
    description: "Attended all classes for 30 days",
    icon: <Award size={24} />,
  },
  {
    id: 2,
    title: "Quick Learner",
    description: "Completed 5 courses in record time",
    icon: <TrendingUp size={24} />,
  },
];

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

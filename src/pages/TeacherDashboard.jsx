import { Box, Typography, Button } from "@mui/material";
import { Users, GraduationCap, BookOpen, Clock } from "lucide-react";
import Grid from "@mui/material/Grid2";
import TeacherStatCard from "../components/dashboard/TeacherStatCard";
import ClassSchedule from "../components/dashboard/ClassSchedule";
import StudentPerformance from "../components/dashboard/StudentPerformance";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { getCoursesAction } from "../redux/Actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.mgt.loginEmail_Role);
  const allCourses = useSelector((state) => state.mgt.courses);
  const coursesCount = allCourses?.filter(
    (course) => course?.teacher.email === userData?.email
  ).length;

  const courses = allCourses?.filter(
    (course) => course?.teacher.email === userData?.email
  );

  const enrolledStudentsCount = allCourses
    ?.filter((course) => course?.teacher.email === userData?.email)
    ?.reduce(
      (total, course) => total + (course.enrolledStudents?.length || 0),
      0
    );

  const enrolledStudentsWithCourses = allCourses
    ?.filter((course) => course?.teacher.email === userData?.email)
    ?.flatMap((course) =>
      (course.enrolledStudents || []).map((student) => ({
        ...student,
        course: course,
      }))
    );

  useEffect(() => {
    const fetchCourses = async () => {
      await dispatch(getCoursesAction());
    };
    fetchCourses();
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
        onClick={() => navigate("/addcourses")}
      >
        <Typography variant="h4">Teacher Dashboard</Typography>
        <Button
          variant="outlined"
          startIcon={<AddIcon size={20} />}
          color="primary"
        >
          Add Course
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <TeacherStatCard
            icon={<Users size={24} color="#2563eb" />}
            title="Total Students"
            value={enrolledStudentsCount}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <TeacherStatCard
            icon={<BookOpen size={24} color="#2563eb" />}
            title="Active Courses"
            value={coursesCount}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ClassSchedule classes={courses} />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <StudentPerformance students={enrolledStudentsWithCourses} />
        </Grid>
      </Grid>
    </Box>
  );
}

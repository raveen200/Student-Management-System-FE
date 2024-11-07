import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  InputAdornment,
  Button,
  Card,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClassIcon from "@mui/icons-material/Class";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import IosShareIcon from "@mui/icons-material/IosShare";
import Grid from "@mui/material/Grid2";
import CustomTextField from "../components/ui/CustomTextField";
import { getCoursesAction, getEnrollmentsAction } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { setCartCourses } from "../redux/Slice";

export default function CourseSelection() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const courses = useSelector((state) => state.mgt.courses);
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const enrolledCourses = useSelector((state) => state.mgt.enrollments);

  useEffect(() => {
    const fetchEnrollments = async () => {
      await dispatch(getEnrollmentsAction());
    };
    fetchEnrollments();
  }, [dispatch]);

  useEffect(() => {
    const fetchCourses = async () => {
      await dispatch(getCoursesAction());
    };
    fetchCourses();
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCartCourses(selectedCourses));
  }, [selectedCourses, dispatch]);

  const addCourse = (course) => {
    const uniqueCourses = selectedCourses.filter(
      (selectedCourse) => selectedCourse._id !== course._id
    );
    setSelectedCourses([...uniqueCourses, course]);
  };
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const isCourseSelected = (course) => {
    return (
      selectedCourses.some(
        (selectedCourse) => selectedCourse._id === course._id
      ) ||
      enrolledCourses.some(
        (enrolledCourse) => enrolledCourse.course._id === course._id
      )
    );
  };

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Available Courses
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore our wide range of courses and start learning today
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <CustomTextField
              label="Search courses"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon size={20} />
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={2}>
        {filteredCourses.map((course) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={course._id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <Box
                sx={{
                  height: 200,
                  backgroundImage: `url(${apiUrl}/${course.coverPicture.replace(
                    /\\/g,
                    "/"
                  )})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Avatar
                    src={`${apiUrl}/${course.coverPicture.replace(/\\/g, "/")}`}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "white",
                      textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                    }}
                  >
                    {course.teacher.email}
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {course.description}
                </Typography>

                <Grid container spacing={2}>
                  <Grid size xs={6}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <AvTimerIcon size={16} />
                      <Typography variant="body2">
                        {course.duration} weeks
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size xs={6}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <GroupIcon size={16} />
                      <Typography variant="body2">
                        {course.enrolledStudents.length}/{course.capacity}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AttachMoneyIcon size={16} />
                  <Typography variant="h6" color="primary">
                    {course.price}
                  </Typography>
                </Box>
                <Box>
                  <Tooltip title="Save for later">
                    <IconButton size="small" sx={{ mr: 1 }}>
                      <BookmarkIcon size={16} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton size="small" sx={{ mr: 1 }}>
                      <IosShareIcon size={16} />
                    </IconButton>
                  </Tooltip>
                  <Button
                    variant="contained"
                    startIcon={<ClassIcon size={16} />}
                    size="small"
                    onClick={() => addCourse(course)}
                    disabled={isCourseSelected(course)}
                  >
                    Enroll Now
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

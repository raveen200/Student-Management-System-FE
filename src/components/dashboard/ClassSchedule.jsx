import {
  Paper,
  Typography,
  List,
  ListItem,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CourseAssignments from "./CourseAssignments";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function ClassSchedule({ classes }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
  };

  const handleClose = () => {
    setSelectedCourse(null);
  };

  if (selectedCourse) {
    const course = classes.find((c) => c.id === selectedCourse);
    return (
      <CourseAssignments
        courseId={selectedCourse}
        courseName={course?.name || ""}
        onClose={handleClose}
      />
    );
  }

  return (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Recent Courses
      </Typography>
      <List>
        {classes.map((classItem) => (
          <ListItem
            key={classItem._id}
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              mb: 1,
              "&:last-child": { mb: 0 },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Typography variant="subtitle1">{classItem?.title}</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {classItem?.description}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
              >
                <Avatar sx={{ width: 24, height: 24 }}>
                  {classItem?.students}
                </Avatar>
                <Typography variant="caption">
                  {classItem?.enrolledStudents.length} Students
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
                onClick={() => handleCourseClick(classItem._id)}
              >
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  View Assignments
                </Button>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

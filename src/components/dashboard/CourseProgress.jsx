import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Paper,
  Chip,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function CourseProgress({ courses }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Active Courses
      </Typography>
      <List>
        {courses.map((course) => (
          <ListItem key={course.id} alignItems="flex-start" sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar src={course.image} variant="rounded" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography component="div" variant="subtitle1">
                  {course?.course.title}
                </Typography>
              }
              secondary={
                <Box component="div" sx={{ mt: 1 }}>
                  <Typography
                    component="div"
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {course?.course.description}
                  </Typography>
                </Box>
              }
            />
            <Chip
              label={course.status}
              size="small"
              sx={{ ml: "auto" }}
              color={course.status === "active" ? "success" : "secondary"}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

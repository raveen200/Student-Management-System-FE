import {
  Paper,
  Typography,
  List,
  ListItem,
  Box,
  Avatar,
} from "@mui/material";
// eslint-disable-next-line react/prop-types
export default function ClassSchedule({ classes }) {
  return (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Recent Courses
      </Typography>
      <List>
        {classes.map((classItem) => (
          <ListItem
            key={classItem.id}
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
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

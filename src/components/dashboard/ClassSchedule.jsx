import {
  Paper,
  Typography,
  List,
  ListItem,
  Chip,
  Box,
  Avatar,
} from "@mui/material";

export default function ClassSchedule({ classes }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "ongoing":
        return "success";
      case "upcoming":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Today&apos;s Schedule
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
                <Typography variant="subtitle1">{classItem.subject}</Typography>
                <Chip
                  size="small"
                  label={classItem.status}
                  color={getStatusColor(classItem.status)}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                {classItem.time}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
              >
                <Avatar sx={{ width: 24, height: 24 }}>
                  {classItem.students}
                </Avatar>
                <Typography variant="caption">
                  {classItem.students} Students
                </Typography>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

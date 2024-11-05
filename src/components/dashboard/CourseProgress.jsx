import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  LinearProgress,
  Paper,
} from '@mui/material';

export default function CourseProgress({ courses }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Course Progress
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
                  {course.title}
                </Typography>
              }
              secondary={
                <Box component="div" sx={{ mt: 1 }}>
                  <Typography component="div" variant="body2" color="text.secondary" gutterBottom>
                    Next: {course.nextLesson}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={course.progress}
                      sx={{ flexGrow: 1 }}
                    />
                    <Typography component="span" variant="body2" color="text.secondary">
                      {course.progress}%
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
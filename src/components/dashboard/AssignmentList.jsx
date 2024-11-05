import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Paper,
} from '@mui/material';

export default function AssignmentList({ assignments }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Upcoming Assignments
      </Typography>
      <List>
        {assignments.map((assignment) => (
          <ListItem
            key={assignment.id}
            secondaryAction={
              <Chip
                label={new Date(assignment.dueDate).toLocaleDateString()}
                color="primary"
                variant="outlined"
              />
            }
          >
            <ListItemText
              primary={
                <Typography component="div" variant="body1">
                  {assignment.title}
                </Typography>
              }
              secondary={
                <Typography component="div" variant="body2" color="text.secondary">
                  {assignment.course}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
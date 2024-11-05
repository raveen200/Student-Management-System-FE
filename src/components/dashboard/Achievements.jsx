import {
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Paper,
} from "@mui/material";

export default function Achievements({ achievements }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Achievements
      </Typography>
      {achievements.map((achievement) => (
        <Card key={achievement.id} sx={{ mb: 2, bgcolor: "primary.light" }}>
          <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: "primary.main" }}>{achievement.icon}</Avatar>
            <Box>
              <Typography
                component="div"
                variant="subtitle1"
                color="primary.contrastText"
              >
                {achievement.title}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="primary.contrastText"
              >
                {achievement.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
}

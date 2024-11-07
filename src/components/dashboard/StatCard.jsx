import { Paper, Typography } from "@mui/material";

export default function StatCard({ icon, title, value }) {
  return (
    <Paper sx={{ p: 3, textAlign: "center" }}>
      {icon}
      <Typography variant="h6" component="h2" sx={{ mt: 1 }}>
        {title}
      </Typography>
      <Typography variant="h4" component="div" color="primary">
        {value}
      </Typography>
    </Paper>
  );
}

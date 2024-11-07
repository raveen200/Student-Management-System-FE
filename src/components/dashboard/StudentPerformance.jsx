import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
} from "@mui/material";
// eslint-disable-next-line react/prop-types
export default function StudentPerformance({ students }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Student Performance
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student?._id}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={student?.avatar} />
                    <Typography variant="body2">{student?.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{student?.course.title}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

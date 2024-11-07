import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import { FileText, Download, AlertCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeworkAction } from "../../redux/Actions";

export default function CourseAssignments({ courseId, courseName, onClose }) {
  const dispatch = useDispatch();
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const assignments = useSelector((state) => state.mgt.homeworks) || [];

  useEffect(() => {
    dispatch(getHomeworkAction(courseId));
  }, [dispatch, courseId]);

  const handleDownload = async (fileUrl) => {
    const fullUrl = `${apiUrl}/${fileUrl.replace(/\\/g, "/")}`;

    try {
      const response = await fetch(fullUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = fileUrl.split("/").pop();
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      console.log(`Downloading file: ${fileUrl}`);
    } catch (error) {
      console.error("There was a problem with the download operation:", error);
    }
  };

  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography variant="h6">{courseName} Assignments</Typography>
        <Button variant="outlined" onClick={onClose}>
          Back to Courses
        </Button>
      </Box>

      {assignments.length > 0 ? (
        <List>
          {assignments.map((assignment) => (
            <ListItem
              key={assignment._id}
              sx={{
                bgcolor: "background.paper",
                mb: 1,
                borderRadius: 1,
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <ListItemIcon>
                <FileText />
              </ListItemIcon>
              <ListItemText primary={assignment.title} />
              <Button
                startIcon={<Download />}
                onClick={() => handleDownload(assignment.fileUrl)}
                variant="contained"
                size="small"
              >
                Download
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            py: 4,
          }}
        >
          <AlertCircle size={48} color="#9e9e9e" />
          <Typography variant="h6" color="text.secondary">
            No Assignments Available
          </Typography>
          <Typography color="text.secondary" align="center">
            There are currently no assignments for this course.
          </Typography>
        </Box>
      )}
    </Paper>
  );
}

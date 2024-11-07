import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  CircularProgress,
  Alert,
  Stack,
  FormHelperText,
} from "@mui/material";
import { Upload, File } from "lucide-react";
import { homeWorkSchema } from "../schema/yupSchema";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHomeworkAction } from "../redux/Actions";

const HomeworkUpload = () => {
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(homeWorkSchema),
    mode: "onChange",
  });

  const selectedFile = watch("file");

  const onSubmit = async (data) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("homework", data.file);
    formData.append("title", data.description);
    formData.append("courseId", id);

    try {
      await dispatch(addHomeworkAction(formData));

      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files?.[0]) {
      setValue("file", event.target.files[0], { shouldValidate: true });
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <Upload size={24} />
          Submit Homework
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Homework submitted successfully!
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Box>
              <Box
                sx={{
                  border: "2px dashed",
                  borderColor: errors.file ? "error.main" : "primary.main",
                  borderRadius: 1,
                  p: 3,
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "action.hover" },
                }}
                onClick={() => document.getElementById("file-input")?.click()}
              >
                <input
                  id="file-input"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  accept=".pdf,.doc,.docx"
                />
                <File size={48} style={{ marginBottom: "8px" }} />
                <Typography>
                  {selectedFile
                    ? selectedFile.name
                    : "Click to select or drag and drop your file here"}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Supported formats: PDF, DOC, DOCX (Max size: 5MB)
                </Typography>
              </Box>
              {errors.file && (
                <FormHelperText error>{errors.file.message}</FormHelperText>
              )}
            </Box>

            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Title & Description"
                  multiline
                  rows={4}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                  placeholder="Add Title and any notes or comments about your homework submission..."
                />
              )}
            />

            <Button
              variant="contained"
              size="large"
              type="submit"
              disabled={uploading}
              startIcon={
                uploading ? (
                  <CircularProgress size={20} />
                ) : (
                  <Upload size={20} />
                )
              }
            >
              {uploading ? "Uploading..." : "Submit Homework"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default HomeworkUpload;

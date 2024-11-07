import { useForm, Controller } from "react-hook-form";
import { courseSchema } from "../schema/yupSchema";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Avatar,
} from "@mui/material";

import ClassIcon from "@mui/icons-material/Class";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "../components/ui/CustomTextField";
import { useDispatch } from "react-redux";
import { addCourseAction } from "../redux/Actions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {  UploadIcon } from "lucide-react";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

export default function AddCourse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [previewUrl, setPreviewUrl] = useState(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(courseSchema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      duration: 0,
      capacity: 0,
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("duration", data.duration);
    formData.append("capacity", data.capacity);
    formData.append("coverPicture", data.coverPicture[0]);

    try {
      const response = await dispatch(addCourseAction(formData));
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Course added successfully");
        navigate("/teacher-dashboard");
      }
    } catch (error) {
      toast.error("Error adding course");
      console.error("Error adding course:", error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={24}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 600,
          borderRadius: 3,
        }}
      >
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Add New Course
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fill in the details to create a new course
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <CustomTextField
            label="Course Title"
            type="text"
            register={register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
            startAdornment={
              <InputAdornment position="start">
                <ClassIcon size={20} />
              </InputAdornment>
            }
          />

          <CustomTextField
            label="Course Description"
            type="text"
            register={register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
            multiline
            rows={2}
          />

          <Button
            component="label"
            variant="outlined"
            size="medium"
            startIcon={!previewUrl ? <UploadIcon size={16} /> : null}
            endIcon={previewUrl ? <CheckIcon size={16} /> : null}
            sx={{
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              mt: 2,
            }}
          >
            Upload Cover
            <input
              type="file"
              hidden
              accept="image/*"
              {...register("coverPicture")}
              onChange={(e) => {
                register("profilePicture").onChange(e);
                handleImageChange(e);
              }}
            />
          </Button>

          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                label="Price"
                type="number"
                onChange={(e) => onChange(Number(e.target.value))}
                error={!!errors.price}
                helperText={errors.price?.message}
                slotProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon size={20} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Controller
            name="duration"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                label="Duration (hours)"
                type="number"
                onChange={(e) => onChange(Number(e.target.value))}
                error={!!errors.duration}
                helperText={errors.duration?.message}
                slotProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AvTimerIcon size={20} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Controller
            name="capacity"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                label="Capacity (students)"
                type="number"
                onChange={(e) => onChange(Number(e.target.value))}
                error={!!errors.capacity}
                helperText={errors.capacity?.message}
                slotProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GroupIcon size={20} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            startIcon={
              isSubmitting ? <AutorenewIcon className="animate-spin" /> : null
            }
            sx={{
              mt: 3,
              py: 1.5,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            {isSubmitting ? "Creating Course..." : "Create Course"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

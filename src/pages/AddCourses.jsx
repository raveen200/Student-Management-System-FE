import { useForm, Controller } from "react-hook-form";
import { courseSchema } from "../schema/yupSchema";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { BookOpen, Clock, Users, DollarSign, Loader2 } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "../components/ui/CustomTextField";

export default function AddCourse() {
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
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Course data:", data);
    } catch (error) {
      console.error("Error adding course:", error);
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
                <BookOpen size={20} />
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
            rows={4}
          />

          {/* <CustomTextField
            label="Price"
            type="number"
            error={!!errors.price}
            helperText={errors.price?.message}
            {...register("price")}
            startAdornment={
              <InputAdornment position="start">
                <DollarSign size={20} />
              </InputAdornment>
            }
            /> */}
          {/* 
          <CustomValueChangeTextField
            title="Price"
            name="price"
            control={control}
            error={!!errors.price}
            helperText={errors.price?.message}
            errormessage={errors.price?.message}
            onChange={(e) => onChange(Number(e.target.value))}
            register={register("price")}



          /> */}

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
                      <DollarSign size={20} />
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
                      <Clock size={20} />
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
                      <Users size={20} />
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
              isSubmitting ? <Loader2 className="animate-spin" /> : null
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
